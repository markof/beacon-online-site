<template lang="pug">
.app-footer-container
  .content-container
    section.abount-beacon-online
      .title ABOUT BEACON ONLINE
      .desc Beacon Online is a subsidiary of Beacon Learning. Beacon Online provides families with online access to customized interventions and support for their children with learning differences to help them thrive in school and in life!
    section.contact-us
      .title CONTACT US
      .desc If you have any questions, please feel free to contact us.
      //- .contact-item
      //-   .icon
      //-     img(src="@assets/index/icon-phone.png")
      //-   .content
      //-     span 18911555185
      .contact-item
        .icon
          img(src="@assets/index/icon-email.png")
        .content
          a(href="mailto:online@beaconlearning.cn") online@beaconlearning.cn
    section.copy-right
      hr.divider
      p Copyright © 2021 Beijin ZhiFei Technology Co., Ltd. All rights reserved.
</template>

<script lang="ts">
export default {
  setup () {

  }
}
</script>

<style lang="stylus" scoped>
.app-footer-container
  font-size: 14px
  background-color: #333
  padding: 20px 32px
  color: #666
  line-height: 1.6
  display: flex
  justify-content: center

  .content-container
    width: 100%
    max-width: 1024px
    text-align: left
    // display: flex

  section
    margin: 20px 0

  .title
    color: #eee
    font-weight: bold
    margin: 10px 0

  section.copy-right
    font-size: 12px
    hr.divider
      height: 1px
      border: none
      background-color: #444
      margin: 10px 0

    p
      padding: 0
      margin: 0
      line-height: 1.6

  section.contact-us
    .contact-item
      position: relative
      display: flex
      align-items: center
      margin: 12px 0

      .icon
        width: 32px
        flex: 0 0 auto
        img
          width: 20px
          opacity: .5
      .content
        flex: 1 1 auto

  @media screen and (min-width: 769px)
    display: flex

    .content-container
      display: flex
      flex-wrap: wrap
      justify-content: space-between

      section
        width: 48%
        margin: 0

      section.contact-us
        order: 0

      section.abount-beacon-online
        order: 1

      section.copy-right
        order: 2
        width: 100%
        margin: 0 0 20px
</style>