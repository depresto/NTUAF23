<template>
  <section class="section">
    <div class="row">
      <div class="concept">
        <h1 class="B6BBBE">憶常</h1>
        <p class="B6BBBE intro">
          在「憶常」的大主題下，分別由三個策展部門 — 「憶策展部」、「常策展部」和「學術策展部」進行籌劃。策展的方式亦將以理念為導向，而不用藝術形式的呈現作為策展的分類，以此讓藝術表現的形式不會受到拘束。
        </p>
      </div>
    </div>

    <mu-row gutter class="row d">
      <mu-col width="100" tablet="33" desktop="33">
        <div
          class="department"
          :style="{ 'background-color': backgroundColor }"
        >

          <div class="name">
            憶策展部｜記憶
          </div>
          <div class="discription">
           我們每個人都有一個看得見，摸得到的軀殼，然而真正證明我們存在的是沒有形體的記憶。記憶同時是極為個人的也是屬於群體的；它造就我們的情感、思想，卻又稍縱即逝;是身為人的真實紀錄，同時經常是捏造、嫁接、竄改出來的。透過對記憶多重性質的認識與重新詮釋和想像，我們希望去挖掘記憶與人之間，形塑，支配，保存等錯綜複雜又習以為常的關係。
          </div>
          <btn class="btn" route="/artproject_bien">憶策展部</btn>
        </div>
      </mu-col>

      <mu-col width="100" tablet="33" desktop="33">
        <div
          class="department"
          :style="{ 'background-color': backgroundColor }"
        >
          <div class="name">
            常策展部｜日常
          </div>
          <div class="discription">
            日常是一種自然，是毫無意識的累積、是日復一日的循環。我們總是週期性地失落、習慣性地微笑，在一成不變的日子裡練習生活，學會世界上不言而喻的規則，然後安然地，隱身其中。希望透過與場域與身分的對話，對質日常裡的秩序與荒謬，重新看待自身存在的環境與角色，也許適應，也許破解。日常本就是那些看似永恆不變，卻又難以掌握的。
          </div>
          <btn class="btn" route="/artproject_xing">常策展部</btn>
        </div>
      </mu-col>

      <mu-col width="100" tablet="33" desktop="33">
        <div
          class="department"
          :style="{ 'background-color': backgroundColor }"
        >
          <div class="name">
            學術策展部｜推廣藝術
          </div>
          <div class="discription">
            藝術不應該只是一種形式，而是一種生活態度。以每一個你我為起點，學術部探尋藝術與日常生活乃至於社會的各種關連，藉由攝影、電影與文字等多元形態，試圖重建一個內在與外在兼具的新美學觀。我們志在搭起藝術與群眾之間的橋樑，透過工作坊及講座啟發參與者對美的多元想像，進而在各式策展中提供共同創作環境，深化藝術在校園中的長遠影響力。
          </div>
          <btn class="btn" route="/academic">學術策展部</btn>
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
        backgroundColor: '#e9d0d6',
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
  color: #322e2d;
 }

 .discription {
  color: #322e2d;
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
