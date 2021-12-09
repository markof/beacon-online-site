<template lang="pug">
.reservation-form
  .form-item
    p.title Mobile Number
    .input-area(:class="[errmsg.mobile ? 'error' : '']")
      input(type="tel" placeholder="Mobile Number" maxlength="11" v-model="form.mobile" @change="mobileValidation")
    .err-msg(v-if="errmsg.mobile")
      img(src="@assets/components/register/info.png")
      span(v-text="errmsg.mobile")
  .form-item(v-if="needcaptcha")
    p.title Captcha
    .input-area(:class="[errmsg.captcha ? 'error' : '']")
      input(type="text" placeholder="captcha" v-model="form.captcha" maxlength="4")
      .side
        .captcha(v-html="captchacode")
    .err-msg(v-if="errmsg.captcha")
      img(src="@assets/components/register/info.png")
      span(v-text="errmsg.captcha")
  .form-item
    p.title SMS verification code
    .input-area(:class="[errmsg.smscode ? 'error' : '']")
      input(type="tel" placeholder="4-digit verification code" maxlength="4" v-model="form.smscode")
      .side
        button(@click="sendSms" v-text="smsbtntext" :disabled="countdown")
    .err-msg(v-if="errmsg.smscode")
      img(src="@assets/components/register/info.png")
      span(v-text="errmsg.smscode")
  .form-item
    p.title Message
    .input-area
      input(placeholder="Leave a message" v-model="form.message")
  .op
    button(@click="login") {{text}}
</template>

<script>
import axios from 'axios'
import querystring from 'query-string'
import cookie from 'js-cookie'
import regx from '@utils/regx'

export default {
  props: {
    text: {
      type: String,
      default: () => {
        return 'SUBMIT'
      }
    },
    desc: {
      type: String,
      default: () => {
        return '注册即表示同意'
      }
    }
  },
  data () {
    return {
      form: {
        countrycode: '86',
        mobile: '',
        captcha: '',
        smscode: '',
        type: 'Beacon Online 预约咨询',
        message: ''
      },
      errmsg: {
        mobile: '',
        captcha: '',
        smscode: ''
      },
      captchacode: '',
      needcaptcha: false,
      qs: null,
      countdown: false,
      smsbtntext: 'Send SMS',
      loading: false
    }
  },
  mounted () {
    this.qs = querystring.parse(window.location.search)
    this.form.ch = 3
    this.form.ck = ''
  },
  methods: {
    goback () {
      history.go(-1)
    },
    getcaptcha () {
      if (this.mobileValidation()) {
        axios.get(`/rest/beacon/client/user/account/captcha`)
          .then(({ data }) => { this.captchacode = data.data })
      }
    },
    mobileValidation () {
      if (!regx.isMobile(this.form.mobile)) {
        this.errmsg.mobile = 'Invalid mobile number'
        return false
      } else {
        this.errmsg.mobile = ''
        return true
      }
    },
    smscodeValidation () {
      if (!regx.isSmsCode(this.form.smscode)) {
        this.errmsg.smscode = 'Invalid SMS verify code'
        return false
      } else {
        this.errmsg.smscode = ''
        return true
      }
    },
    sendSms () {
      if (this.mobileValidation() && !this.countdown && !this.loading) {
        this.loading = true
        axios.post('/rest/beacon/client/user/account/verify/mobile/smscode', {
          countrycode: this.form.countrycode,
          mobile: this.form.mobile,
          captcha: this.form.captcha
        })
          .then(() => {
            this.startCountDown()
            this.errmsg.captcha = ''
          })
          .catch((err) => {
            if (err.response && err.response.status === 400) {
              const msg = err.response.data.msg
              if (msg === 'NEED_CAPTCHA') {
                this.getcaptcha()
                this.needcaptcha = true
              } else if (msg === 'INVALID_CAPTCHA') {
                this.getcaptcha()
                this.needcaptcha = true
                this.errmsg.captcha = 'Invalid captcha'
              }
            } else {
              window.alert('抱歉，出了点意外，请重试。')
            }
          })
          .then(() => {
            this.loading = false
          })
      }
    },
    startCountDown () {
      let count = 60
      this.smsbtntext = `Resend ${count}`
      this.countdown = true
      const timer = setInterval(() => {
        if (count === 0) {
          this.smsbtntext = `Resend`
          this.countdown = false
          clearInterval(timer)
          this.getcaptcha()
        } else {
          this.smsbtntext = `Resend ${--count}s`
        }
      }, 1000)
    },
    login () {
      if (this.mobileValidation() && this.smscodeValidation() && !this.loading) {
        this.loading = true
        axios.post('/rest/beacon/client/user/service/reservation', {
          countrycode: this.form.countrycode,
          mobile: this.form.mobile,
          smscode: this.form.smscode,
          ch: this.form.ch,
          ck: this.form.ck,
          type: this.form.type,
          message: this.form.message
        }).then(({ data }) => {
          cookie.set('bc_token', data.data.token, { expires: 100, path: '/' })
          cookie.set('bc_uid', data.data.id, { expires: 100, path: '/' })
          this.$emit('success')
          // window.location.href = './success' 
        }).catch((err) => {
          if (err.response && err.response.status === 400) {
            const msg = err.response.data.msg
            if (msg === 'INVALID_SMS_CODE') {
              this.errmsg.smscode = 'Invalid sms verify code'
            } else if (msg === 'SMS_ONEY') {
              this.errorMessage = '出了点异常，请重试。'
            }
          } else {
            window.alert('抱歉，出了点意外，请重试。')
          }
        }).then(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.reservation-form
  // padding: 20px 20px 20px
  box-sizing: border-box
  text-align: left

  .head
    color: #6B7A8F
    margin-bottom: 40px
    h1
      font-size: 24px
      line-height: 1.2
      margin-bottom: 30px

    p
      line-height: 1.6

  .form-item
    margin-bottom: 30px

    p.title
      font-size: 15px
      margin-bottom: 10px
      color: #444

  .input-area
    position: relative
    box-sizing: border-box
    width: 100%

    &:after
      content: ''
      display: block
      border-bottom: 1px solid #eee

    &.error:after
      border-bottom: 1px solid #F05542

    select
      appearance: none
      border: none
      font-size: 15px
      display: block
      width: 100%
      height: 40px
      box-sizing: border-box
      outline: none
      color: #6B7A8F
      background-color: #fff

    input
      color: #6B7A8F
      outline: none
      display: block
      box-sizing: border-box
      appearance: none
      border: none
      width: 100%
      height: 40px
      font-size: 15px
      padding: auto 0

    .side
      position: absolute
      right: 0
      top: 0
      color: #FF5010

      .captch
        height: 40px

      button
        border: none
        font-size: 14px
        height: 40px
        margin: 0
        padding: 0
        color: #FF5010
        box-sizing: border-box
        appearance: none
        background: transparent

        &[disabled]
          color: #ddd
          cursor: inherit

      img
        display: block

  .err-msg
    margin: 5px 0
    color: #F05542
    font-size: 12px
    img
      width: 14px
      position: relative
      top: 3px
      margin-right: 5px
      display: inline-block

  .op
    margin-top: .2rem
    button
      font-size: 16px
      background-color: #FF5010
      height: 40px
      width: 100%
      border: none
      outline: none
      appearance: none
      color: #fff
      border-radius: 20px

    .term
      font-size: .14rem
      a
        color: #15AF9C
</style>
