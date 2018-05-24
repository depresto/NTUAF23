<template>
  <section class="section">
    <div class="row">
      <div class="intro">
        <div class="intro_main">
          <div>
            <h3>主視覺理念</h3>
            <div>日常，是日復一日的，像小溪一樣奮不顧身地向前 而記憶，是過去的日常，像凝固了的水，終究在哪裡形成一個圓、一個點 我們都在時間的河流裡飄著、擺著，也許不小心翻覆弄得一身濕，也可能試圖抓住岸邊，願能在某些時刻駐足 但時間從不為任何人停留，我們都只能靜悄悄地，看著太陽升起、落下、以及那滿天星斗，在最夜深人靜的時刻，把那個自己留在昨日，而今日的自己，仍在日常中，掙扎而炙熱的存在著。</div>
          </div>
        </div>
        <div class="intro_discription">
          <h2>活動理念</h2>
          <p>
            我們從出生到現在，一直以來我們看待世界的方式，實際上受到各種因素所影響，而我們透過自己的感官所感受的世界也因人而異，本屆藝術季想要探討的是你我日常和回憶，我們總是看到許多未來卻看不到過去和塑造自己的原因，我們也總是只看到自己而看不到他人的世界。
          </p>
          <btn route="/manual">線上手冊</btn>
          <p><router-link to="manual">線上手冊</router-link></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Btn from '../components/Btn';

export default {
  extends: {
    components: {
      Btn,
    },
  },
};
</script>


<style lang="sass" scoped>

  @import '../sass/settings'

  .row
    margin: 0 2em

  .section
    max-width: 1280px
    margin:  120px auto
    margin-top: 20px

  .intro
    height: 480px
    width: 100%
    position: relative

  .intro_main
    height: 480px
    width: 70%
    position: relative
    background: $theme-l
    display: flex
    align-items: center
    justify-content: center
    padding: 0 15%
    color: #fff
    font-size: 1.1em
    line-height: 2em
    overflow: hidden
    &:hover
      img
        transition: .5s
        opacity: 0
    img
      position: absolute
      bottom: 0
      height: 20em
      width: auto
      right: -10px
      z-index: 10
      opacity: 0.8
      transition: .5s

  .intro_discription
    width: 500px
    height: 400px
    position: absolute
    right: 0
    top: 40px
    color: white
    background: $theme
    padding-top: 30px
    padding: 60px 50px
    .btn-wrapper
      margin-top: 30px

  @media only screen and (max-width: 768px)
    .intro
      height: auto
    .intro_main
      position: relative
      width: 100%
      padding: 32px 32px
      font-size: 1em
      line-height: 1.5em
      height: auto
      img
        opacity: 0.1
      &:hover
        img
          transition: .5s
          opacity: 0.2
    .intro_discription
      position: relative
      width: 100%
      padding: 0 32px
      font-size: 0.8em
      line-height: 1.5em
      padding: 48px 32px
      height: auto




</style>
