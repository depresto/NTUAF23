<template>
  <section class="section">
    <div class="row">
      <div class="intro">
        <div class="intro_main">
          <div>
            <div>活在一個存在著核心主流的無形社會中，因擁有不同觀點而獨特的我們，是否還能以最原始、最單純透明的思緒，生活在既定框架之中？</div>
            <div>以人是構成社會基本單位的起點開始發想，利用探尋源頭的方式呈現自我在社會中變形的過程。社會的期待及規範是流動的雨水，飄落在人們生活的環境。細小的雨滴會輕柔地落下、蒸發，也會銳利的一刀一刀割分著我們。藉由人體被剖開的不同部位，剖面顯露出色彩斑斕的價值觀正流動於整個身軀中，流動的意識與社會刺激相互碰觸後，人們看待世界的方式逐漸形成正負面的變化。飄浮於開放環境的身軀，帶有重新拼湊自我的可能。社會多元的觀點是否會內化，還是持續流動在外界環境？最後的我們，可能還保留著原本的思考模式，也或許不盡相同。</div>
          </div>
          <img class="hero_head" src="static/images/hero/hero_head.png">
        </div>
        <div class="intro_discription">
          <h2>變形</h2>
          <p>
            或許所謂的世界是建立在人們的思想跟話語上的吧，就像幻燈片的本體或許只是一直轉著的膠卷跟那一束光一樣。  而當來自各個地方的各式各樣的人，一邊各自緩慢地或是劇烈地變化著的時候，關於世界的投影畫面，也一邊快速地變換著。變形於是指的是關於人的變形，也是世界的變形。  我們試著用藝術作品記錄下世界變形的過程，即便它不免在下一秒成為世界的一部分。
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
    padding: 30px 50px

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
