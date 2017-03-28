<template>
  <section class="section">
    <mu-row gutter class="row">
      <mu-col width="100" tablet="33" desktop="33">
        <div class="department">
          <div class="name">
            變策展部
          </div>
          <div class="discription">
            帶領大家理解藝術治療內涵當中非常重視的結構與解構。讓參與者跟著講師的腳步
          </div>
          <div class="btn" >
            前往專頁
          </div>
           <btn route="/change">現在就出發</btn>
          <img class="department1_img" src="static/images/hero/hero_head.png">
        </div>
      </mu-col>

      <mu-col width="100" tablet="33" desktop="33">
        <div class="department">
          <div class="name">
            形策展部
          </div>
          <div class="discription">
            帶領大家理解藝術治療內涵當中非常重視的結構與解構。讓參與者跟著講師的腳步
          </div>
          <div class="btn">
            前往專頁
          </div>
          <img class="department1_img" src="static/images/hero/hero_hand.png">
        </div>
      </mu-col>

      <mu-col width="100" tablet="33" desktop="33">
        <div class="department">
          <div class="name">
            學策展部
          </div>
          <div class="discription">
            帶領大家理解藝術治療內涵當中非常重視的結構與解構。讓參與者跟著講師的腳步
          </div>
          <div class="btn">
            前往專頁
          </div>
          <img class="department1_img" src="static/images/hero/hero_foot.png">
        </div>
      </mu-col>
    </mu-row>
  </section>
</template>

<script>
import Btn from '../components/Btn';

export default {
  extends: {
    // data() {
    //   return {
    //     field: images.field,
    //     cover: images.cover,
    //   };
    // },
    components: {
      Btn,
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '../sass/settings'

  .row
    margin: 0 2rem

  .section
    max-width: 1280px
    margin: 80px auto

  .department
    height: 360px
    background: $bg-color
    position: relative
    padding: 1.5em
    text-align: left
    margin: 1em 0

  .btn
    overflow: hidden
    z-index: 10
    border: 1px solid #fff
    transition-duration: .7s
    cursor: pointer
    &:before
      content: ''
      background-color: $theme
      height: 100%
      left: -35%
      top: 0
      transform: skew(50deg)
      transition-duration: 0.6s
      transform-origin: top left
      width: 0
      height: 200px
      position: absolute
      z-index: -1
    &:hover
      color: #fff
      transition-duration: .7s
      &:before
        height: 200px
        width: 135%


</style>

<style lang="css" scoped>

 .name {
  font-size: 2em;
  color: #fff;
 }

 .discription {
  color: #fff;
 }

 .btn {
  background: #fff;
  color: #4A7583;
  text-align: center;
  padding: .6em 0;
  width: 10.5em;
  position: absolute;
  bottom: 2em;
  right: 2em;
 }

 .department1_img {
  position: absolute;
  width: auto;
  height: 13em;
  bottom: 0;
  left: 1em;
 }
</style>
