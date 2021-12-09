<template lang="pug">
.reservation-page-container
  //- van-nav-bar(title="Appointment" left-text="Back" right-text="" left-arrow @click-left="goback")
  .content-container
    h1 We look forward to talking with you soon!
    p Please leave your contact information and any additional information that you think may be relevant to our conversation. We will reach out to you soon!
    register-box(@success="registerSuccess")
</template>

<script>
import registerBox from '@components/register.vue'

export default {
  components: {
    registerBox,
  },
  setup () {
    function registerSuccess() {
      window.location.href = "/en/home/success.html"
    }

    return {registerSuccess}
  }
}
</script>

<style lang="stylus" scoped>
.reservation-page-container
  max-width: 600px
  line-height: 1.6
  margin: 0 auto

  h1
    font-size: 24px

  .content-container
    padding: 10px 32px
    margin: 0 auto
</style>
