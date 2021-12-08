<template lang="pug">
.page-success-container
  img.success-icon(src="@assets/home/success/icon-success.png")
  .content-container
    .title SUCCESS!
    .desc Congratulations, the submission is successful! We will contact you as soon as possible.

  button.home-button(@click="goHome") HOME
</template>

<script lang="ts">
export default {
  setup () {
    function goHome () {
      window.location.href = "/en/index.html"
    }

    return { goHome }
  }
}
</script>

<style lang="stylus" scoped>
.page-success-container
  text-align: center
  padding: 32px

  img.success-icon
    width: 120px
    display: inline-block
    margin: 20px 0 20px

  .content-container
    line-height: 1.6

    .title
      font-size: 24px
      font-weight: bold
      margin: 12px 0

    .desc
      font-size: 16px

  .home-button
    width: 120px
    margin-top: 40px
    height: 40px
    background-color: #ff5010
    border-radius: 20px
    color: #fff
    font-size: 16px
    line-height: 1
    padding: 12px 0
    appearance: none
    border: none
    outline: none
</style>