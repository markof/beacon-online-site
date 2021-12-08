<template lang="pug">
mixin section-head
  section.head
    .background-image
      .jumbo
        img.logo(src="@assets/index/logo.png")
        .beacon-online BEACON ONLINE
        .slogan Online Support for Kids with Learning Differences
        button.button(@click="register") REQUEST A CONSULTATION

mixin section-covid
  section.covid
    .title Every child deserves to thrive!
    .content COVID has exposed a need for personalized, on-going support for our kids with learning differences globally, with learning gaps widening for our unique learners who can’t keep up in online, large-group settings. With experience supporting over 3000 students with diverse needs globally, the Beacon Online team is your partner for helping your child thrive academically and in everyday life!

mixin section-tell-your-need
  section.tell-us-your-need
    .section-container
      .head-img
        img(src="@assets/index/tell-us-your-need.png" alt="tell us your need!")

      .content-container
        .title Tell us about your need
        .desc Beacon Online is a student-centered learning experience. Share your concerns and priorities so that we can design a customized learning program for your child.

        //- .sub-title How do we start?
        .feature-list
          .feature-item
            img.icon(src="@assets/index/check-icon-round.png")
            .feature-text Share relevant observations and documentation (IEPs, EdPsych, NeuroPsych, Report Cards)
          .feature-item
            img.icon(src="@assets/index/check-icon-round.png")
            .feature-text Access online screenings and evaluations
          .feature-item
            img.icon(src="@assets/index/check-icon-round.png")
            .feature-text Request experts that are the best fit for your child
        button.action-button(@click="register") Join Beacon Online NOW

mixin section-meet-teacher
  section.meet-our-teacher
    .section-container
      .head-img
        img(src="@assets/index/meet-our-teacher.png" alt="tell us your need!")

      .content-container
        .title Meet our specialists
        .desc At Beacon Online, we believe that finding the right support is the key to faster, more lasting improvements in learning.

        //- .sub-title Who are they?
        .feature-list
          .feature-item
            img.icon(src="@assets/index/check-icon-round.png")
            .feature-text Beacon Online experts average 4+ years of instructional and intervention experience
          .feature-item
            img.icon(src="@assets/index/check-icon-round.png")
            .feature-text Less than 1% of applicants are accepted as a Beacon Online specialist
          .feature-item
            img.icon(src="@assets/index/check-icon-round.png")
            .feature-text Choose from learning specialists, shadow teachers, SLP’s, PT’s, and OT’s
        button.action-button(@click="register") Request a Consultation NOW

mixin section-improve-your-learning
  section.improve-your-learning
    .section-container

      .head-img
        img(src="@assets/index/improve-your-learning.png" alt="tell us your need!")

      .content-container
        .title Improve your learning
        .desc With Beacon Online, learning can happen anytime, from anywhere. Practice between the sessions to optimize your child's learning outcomes!
        //- .sub-title How it works?
        .feature-list
          .feature-item
            img.icon(src="@assets/index/check-icon-round.png")
            .feature-text 1-on-1 sessions at your fingertips
          .feature-item
            img.icon(src="@assets/index/check-icon-round.png")
            .feature-text Practice customized for you
          .feature-item
            img.icon(src="@assets/index/check-icon-round.png")
            .feature-text On-call support from your designated Learning Coach
        button.action-button(@click="register") Request a Consultation NOW

mixin section-service-compare
  section.service-compare
    .title Support for your child should be personalized, hassle-free, and affordable!
    .content-container
      .row.title
        .col.sub-title
        .col BEACON ONLINE
        .col Traditional Learning Support
      .row
        .col.sub-title Cost
        .col 
          p Sessions start at 350RMB/50 mins
        .col
          p Up to 3000 RMB/hour
      .row
        .col.sub-title Scheduling
        .col 
          p Online, reschedule sessions for free*
        .col
          p Requires cancellation fees
      .row
        .col.sub-title Convenience
        .col 
          p At your fingertips! Learn from anywhere!
        .col
          p Requires commute
      .row
        .col.sub-title Learning Routine
        .col
          p Includes personalized practice, designed to improve your child’s outcomes
        .col
          p Typically not included

      .remark
        p * Cancellation within 24 hours will incur additional charges

mixin section-sign-up
  section.sign-up
    .title Request a Consultation
    register-box(@success="registerSuccess")

.page-container
  +section-head()
  +section-covid()
  +section-tell-your-need()
  +section-meet-teacher()
  +section-improve-your-learning()
  +section-service-compare()
  +section-sign-up()
  appFooter

</template>

<script lang="ts">
import appFooter from '@components/app-footer.vue'
import registerBox from '@components/register.vue'

export default {
  components: { registerBox, appFooter},
  setup() {
    function registerSuccess() {
      window.location.href = "/en/home/success.html"
    }

    function register() {
      window.location.href = "/en/home/contactus.html"
    }

    return { registerSuccess, register }
  }
}
</script>

<style lang="stylus" scoped>
.page-container
  text-align: center

.feature-list
  .feature-item
    padding-left: 42px
    position: relative
    line-height: 1.6
    margin: 12px 0

    img.icon
      position: absolute
      left: 0
      top: 0
      width: 26px

section.head
  background-color: #996A4E

  .background-image
    height: 560px
    maring: 0 auto
    background-image: url("@assets/index/head-bg-img.png")
    background-size: cover
    padding: 20px 32px 0
    color: #fff
    text-align: center

  img.logo
    width: 80px
    display: inline-block

  .beacon-online
    padding-top: 160px
    font-size: 16px

  .slogan
    font-size: 32px
    margin: 16px 0 40px
    line-height: 1.6

  button.button
    color: #fff
    outline: none
    appearance: none
    border: none
    display: inline-block
    background-color: #FF5010
    height: 40px
    border-radius: 20px
    font-size: 16px
    line-height: 1
    width: 256px
    box-shadow: 0 0 20px RGBA(255, 90, 16, .3)
    text-align: center

  @media screen and (min-width: 769px)
    text-align: center
    .background-image
      display: inline-block
      background-image: url("@assets/index/head-bg-pc.png")
      background-position: right
      background-size: auto 100%
      background-repeat: no-repeat
      text-align: left
      max-width: 1088px
      width: 100%

    .jumbo
      max-width: 400px

    .beacon-online
      padding-top: 100px

section.covid
  text-align: left
  padding: 40px 32px
  line-height: 1.6

  .title
    padding: 12px 0
    font-size: 24px
    font-weight: bold
    
  .content
    font-size: 16px

  @media screen and (min-width: 769px)
    text-align: center
    width: 680px
    margin: 0 auto

section.tell-us-your-need,
section.meet-our-teacher,
section.improve-your-learning
  padding: 20px 32px
  line-height: 1.6
  text-align: left

  .head-img
    img
      margin-bottom: 20px
      width: 100%
      border-radius: 8px

  .title
    padding: 12px 0
    font-size: 24px
    font-weight: bold

  .sub-title
    font-weight: bold
    font-size: 18px
    margin: 12px 0
    
  button.action-button
    display: block
    appearance: none
    border: none
    outline: none
    margin: 16px 0
    border-radius: 8px
    height: 40px
    width: 100%
    font-size: 16px
    background-color: white
    border: 1px solid #FF5010
    color: #FF5010
    text-align: center

  .head-img
    padding-top: 0
    width: 100%

  .content-container
    width: 100%

  @media screen and (min-width: 769px)
    display: flex
    justify-content: center

    .section-container
      width: 100%
      max-width: 1024px
      display: flex
      justify-content: space-between

      .head-img
        padding-top: 68px
        width: 48%

      .content-container
        width: 48%

section.meet-our-teacher
  @media screen and (min-width: 769px)
    .section-container
      .head-img
        order: 1
      .content-container
        order: 0

section.service-compare
  background-color: #f0f0f0
  padding: 32px 32px
  line-height: 1.6
  text-align: left

  .remark
    font-size: 12px
    color: #999

  .title
    padding: 12px 0
    font-size: 24px
    font-weight: bold
    margin-bottom: 20px

  .row
    display: flex
    flex-wrap: wrap
    justify-content: space-between

    &.title
      color: #FF5010

      .col.sub-title
        display: none

    .col
      width: 46%
      font-size: 14px

      p
        margin: 6px 0

      &.sub-title
        width: 100%
        font-weight: bold
        margin: 12px 0 6px

        &:after
          content:""
          display: block
          height: 1px 
          background-color: #ddd

  @media screen and (min-width: 769px)
    .content-container
      width: 768px
      margin: 0 auto

    .title
      text-align: center
      margin-bottom: 0

    .row
      border-bottom: 1px solid #ddd
      flex-wrap: nowrap
      align-items: center

      &.title
        text-align: left
        .col.sub-title
          display: block

      .col
        width: 38%

        &.sub-title
          width: 18%

          &:after
            display: none

  @media screen and (min-width: 1025px)
    .content-container
      width: 1024px
      margin: 0 auto

section.sign-up
  padding: 20px 32px
  line-height: 1.6
  .title
    font-size: 24px
    font-weight: bold

  @media screen and (min-width: 481px)
    width: 480px
    margin: 0 auto

</style>
