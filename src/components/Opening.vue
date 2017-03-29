<template>
  <div class="wrapper">
    <section class="section">
      <div class="row">
        <div class="intro">
          <div class="intro_img">
          </div>
          <div class="intro_discription">
            <h2>開幕活動</h2>
            <p>臺大藝術季為一年一度全校性最大的的藝術類型活動,為期約一個月左右,期間有
            相當豐富的藝術作品展出,包含靜態作品和舞蹈與電影等方式呈現的作品,形式多元內容
            豐富。為此,開幕式作為臺大藝術季開始的盛大宣告,以各種類型的藝術表演,帶來五感
            交錯的體驗。作為本屆臺大藝術季「變形」的預告及宣傳,開幕活動將在學生第一活動中
            心,打造一場華麗盛大的開幕活動,宣布第23屆臺大藝術季的正式開始。</p>
            <p>
              參與對象:不限臺大校內師生,歡迎所有喜愛藝術、愛好表演的參與者
            </p>
            <div class="time">
              <li>15:00 - 18:00 彩繪椰林大道</li>
              <li>18:00 - 18:30 怡仁堂開幕</li>
              <li>18:30 - 19:00 校長與總召致詞</li>
              <li>19:00 - 21:00 正式節目</li>
              <li> 21:00 - 22:00 After Party</li>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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

  .wrapper
    background: #E4EDEE
    padding: 40px 0
    margin: 80px 0

  .row
    margin: 0 2rem

  .section
    max-width: 1280px
    margin:  120px auto
    margin-top: 20px

  .intro
    max-width: 640px
    text-align: center
    margin: 0 auto

  .time
    max-width: 400px
    margin: 0 auto
    text-align: justify
    li
      display: block
</style>
