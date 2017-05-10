<template>
  <section class="section">
    <div class="row">
      <div class="concept">
        <h1 class="B6BBBE">變形</h1>
        <p class="B6BBBE intro">
          今年在反思的主題下,有三個不同方向的議題探討,分別由三個策展部門 — 「變策
          展部」、「形策展部」、「學術策展部」進行策劃。策劃的方式亦將以理念為導向,而不
          再用藝術形式的呈現作為策展的分類,因此在三部門的規劃中,都將涵括多元形式的藝術
          作品,共同表現同一策展主軸。
        </p>
      </div>
    </div>

    <mu-row gutter class="row d">
      <mu-col width="100" tablet="33" desktop="33">
        <div
          class="department"
          :style="{ 'background-image': 'url(' + backgroundImage1 + ')' }"
        >

          <div class="name">
            變策展｜身份變形
          </div>
          <div class="discription">
           被賦予的，謂之身分。每一種身份背後隱含的角色期待與互動關係，將我們編織進巨大的人際網絡當中，誰也逃不了。
          </div>
          <btn class="btn" route="/artproject_bien">變策展部</btn>
<!--           <img class="department1_img" src="static/images/hero/hero_head.png"> -->
        </div>
      </mu-col>

      <mu-col width="100" tablet="33" desktop="33">
        <div
          class="department"
          :style="{ 'background-image': 'url(' + backgroundImage2 + ')' }"
        >
          <div class="name">
            形策展｜科技變形
          </div>
          <div class="discription">
            科技帶領世界漸漸地改變，將人們的深信不疑轉換為下一個迷思；驀然回首，世界早已不是當初的模樣。
          </div>
          <btn class="btn" route="/artproject_xing">形策展部</btn>
<!--           <img class="department1_img" src="static/images/hero/hero_hand.png"> -->
        </div>
      </mu-col>

      <mu-col width="100" tablet="33" desktop="33">
        <div
          class="department"
          :style="{ 'background-image': 'url(' + backgroundImage3 + ')' }"
        >
          <div class="name">
            學術策展｜世代變形
          </div>
          <div class="discription">
            每個世代，都有著他們獨自的美麗與悲愁，而隨著時間不斷的推移，思想、正義跟隨世代一起變形。
          </div>
          <btn class="btn" route="/academic">學術策展部</btn>
<!--           <img class="department1_img" src="static/images/hero/hero_foot.png"> -->
        </div>
      </mu-col>
    </mu-row>
  </section>
</template>

<script>
import Btn from '../components/Btn';

export default {
  extends: {
    data() {
      return {
        backgroundImage1: 'static/images/home/department_1.png',
        backgroundImage2: 'static/images/home/department_2.png',
        backgroundImage3: 'static/images/home/department_3.png',
      };
    },
    components: {
      Btn,
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '../sass/settings'
  .B6BBBE
    color: #B6BBBE
  .row
    margin: 0 2rem

  .section
    max-width: 1280px
    margin: 80px auto
    margin-bottom: 120px

  .intro
    line-height: 2rem
    margin: 1.5rem 0

  .department
    height: 360px
    position: relative
    padding: 1.2em
    text-align: center
    margin: 1em 0
    @extend ._bcg-cover
  .concept
    max-width: 640px
    margin: 0 auto
  .btn_wrapper
    position: absolute
    text-align: center
    position: absolute
    bottom: 2em
    margin: 0 auto
    left: 0
    right: 0
  .btn
    padding: 0.5em 1.5em
    cursor: pointer
    font-size: $button-size
    font-weight: 800
    transform: scale(0.9)
    transition: border 0.35s ease,
    background-color 0.35s ease,
    color 0.35s ease,
    transform 0.35s ease
    box-sizing: border-box
    font-family: $fonts
  .btn_b
    border: 1px solid red
    display: inline
    padding: 0.5em 1.5em
    font-size: $button-size
    color: $button-color
    border: 2px $button-border-color solid
    &:hover
      background: $button-hover-background-color
      color: #fff
      border-color: $button-hover-border-color
  // .btn_a
  //   overflow: hidden
  //   z-index: 10
  //   border: 1px solid #fff
  //   transition-duration: .7s
  //   cursor: pointer
  //   &:before
  //     content: ''
  //     background-color: $theme
  //     height: 100%
  //     left: -35%
  //     top: 0
  //     transform: skew(50deg)
  //     transition-duration: 0.6s
  //     transform-origin: top left
  //     width: 0
  //     height: 200px
  //     position: absolute
  //     z-index: -1
  //   &:hover
  //     color: #fff
  //     transition-duration: .7s
  //     &:before
  //       height: 200px
  //       width: 135%


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
  text-align: center;
  position: absolute;
  bottom: -.5em;
  margin: 0 auto;
  left: 0;
  right: 0;
 }

 .department1_img {
  position: absolute;
  width: auto;
  height: 13em;
  bottom: 0;
  left: 1em;
 }
</style>
