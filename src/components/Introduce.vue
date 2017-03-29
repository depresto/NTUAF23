<template>
  <section class="section">
    <div class="row">
      <div class="intro">
        <div class="intro_img">
          <img class="hero_head" src="static/images/hero/hero_head.png">
        </div>
        <div class="intro_discription">
          <h2>變形</h2>
          <p>
            世界的不同變形,而沒有絕對分明的、無法相容的立場或看法。目的是希望能以反思為主
            軸,透過不同視角與觀點去創作,進而讓受眾體驗並且反思日常生活的不同可能。期許透
            過藝術這樣軟性的溝通管道,對於不同的思考方式能有更廣泛的包容。
          </p>
          <btn route="/change">關於變形</btn>
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
    margin: 0 2rem

  .section
    max-width: 1280px
    margin:  120px auto
    margin-top: 20px

  .intro
    height: 480px
    width: 100%
    position: relative

  .intro_img
    height: 480px
    width: 70%
    position: relative
    background: $theme-l
    img
      position: absolute
      bottom: 0
      height: 20em
      width: auto
      right: -10px
      z-index: $z-index-top

  .intro_discription
    width: 500px
    height: 400px
    position: absolute
    right: 0
    top: 40px
    background: $theme
    border-radius: 45% 60% 64% 60%
    padding-top: 30px
    padding: 30px 50px
</style>
