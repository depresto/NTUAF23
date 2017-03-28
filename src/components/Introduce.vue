<template>
  <section class="section">
    <div class="row">
      <div class="intro">
        <div class="intro_img">
          <img class="hero_head" src="../assets/images/hero/hero_head.png">
        </div>
        <div class="intro_discription">
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
    margin:  80px auto
    margin-top: 20px
  .intro
    height: 480px
    width: 100%
    position: relative
  .intro_img
    height: 480px
    width: 80%
    position: relative
    background: $theme-l
    img
      position: absolute
      bottom: 0
      height: 20em
      width: auto
      z-index: $z-index-top
  .intro_discription
    width: 400px
    height: 400px
    position: absolute
    right: 0
    top: 40px
    background: $theme
</style>
