<template>
  <div>
    <navBar></navBar>
    <div
      class="hero"
      :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
    >
    </div>
    <div class="wrapper">
      <div class="section">
        <div class="intro">
          <div class="title">變策展部｜理念介紹</div>
          <div>人意識到自己的方式,常透過外界對自我的感應而形成。而人們所謂的自我,或對
          於他人的認識,是否常只是經由社會的期待或判斷而生成的、固化的印象單元?透過問題
          意識的提出、詮釋角度的轉換,我們希望去解構這些關於身分的思維。</div>
          <div>從此自我認識、行為社會化的反思面向出發,我們試著用不同的藝術媒介去剖析一
          個群體乃至於個別的人們,在日常生活中究竟是如何地看待或表現自我,而又是否受到了
          他人觀點的影響,並且以裝置藝術、攝影展、舞劇表演等形式,呈現出我們的觀察。</div>
        </div>
        <div class="project-list">
          <div class="title">專案一覽</div>
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
              <div class="fb-video"
              data-href="https://www.facebook.com/NTUartfest/videos/1357235894314831/"
              data-allowfullscreen="true"
              data-autoplay="false"
              data-show-captions="true">
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div class="list">
                <li>【政治正確的精神錯亂】編導式攝影展</li>
                <li>【畫像｜畫相】臉譜展覽與工作坊</li>
                <li>【邃】互動裝置藝術</li>
                <li>【形意】裝置藝術</li>
                <li>【妖易】實境劇場</li>
                <li>【烏合】影像創作與行為藝術</li>
                <li>【WHAT If】舞蹈劇場</li>
              </div>
            </mu-col>
          </mu-row>
        </div>
        <div class="project">
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
              <div
              class="project-img"
              :style="{ 'background-image': 'url(' + mysterious + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">邃</div>
                <div class="discription">
                  <div>
                 本次展覽以「一個讓人意識到自我存在的窗口」為理念，利用外在空間的劃分及變形，擺設可與觀展者互動的裝置，使觀展者在走入進設計巧思的空間時，暫時剝離層層非自我主體的外衣。讓過去與當下糾纏不定的心靈狀態，外在眼光及個人價值的拉扯，形成辨證與肯定的過程，在無數光陰的縫隙間更加認識自我的存在。
                  </div>
                  <div class="place">
                  ｜互動式裝置藝術 ｜<br/>
                  展期：05.08 - 05.26 平日｜12：00 - 20：00 <br/>
                  地點：校史館夾層書庫<br/>
                  ｜紀實文字作品｜<br/>
                  展期：05.09 - 05.26｜00：00 - 23：59<br/>
                  地點：社科院外走廊
                  </div>
                  <a class="more" href="https://medium.com/ntuartfest/acad-gender/home">
                    more
                  </a>
                </div>
              </div>
            </mu-col>
          </mu-row>
        </div>
        <div class="project">
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
              <div
              class="project-img"
              :style="{ 'background-image': 'url(' + artfood + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title"> 畫像｜畫相</div>
                <div class="discription">
                  <div>
                有別於舞台上京劇、崑曲裡各角色的扮相，八家將的臉譜是臺灣民俗與宗教結合的特有產物，每個家將在扮演神明的過程中，為了合其身份，一旦畫上臉譜即開始代表神明，所有的行為舉止皆需特別注意，保持莊嚴肅穆。
                  </div>
                  <div class="place">
                  ｜展覽｜<br/>
                  展期：05.05 - 05.26｜09：00 - 18：00 <br/>
                  地點：第二學生活動中心3F Global Lounge
                  ｜工作坊｜<br/>
                  展期：05.14、05.21 | 13：00 - 15：00<br/>
                  地點：第二學生活動中心3F Global Lounge
                  </div>
                </div>
              </div>
            </mu-col>
          </mu-row>
        </div>
        <div class="project">
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
              <div
              class="project-img"
              :style="{ 'background-image': 'url(' + retro + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">溯</div>
                <div class="discription">
                  <div>
                  我們早已習慣選舉將近時飄揚著各式候選人宣傳旗幟的街道，自由民主這個詞彙如同空氣一般自然地嵌融在我們的生活裡，我們與它共存，卻鮮少凝視它的過去。 民主自由並非自然而然地發生，先人用血與眼淚為我們引路，帶領我們走向開放的民主社會。
                  </div>
                  <br/>
                  <div>
                  因此，《溯》要與大家一同回首，凝視先人、凝視歷史、凝視傷疤。 我們嘗試用另一種面貌來呈現轉型正義。透過仿照歷史現場的裝置物件，還原過去權威時期的時空背景，我們期待與你一起在不同的裝置作品中反思過去，深入探究在這片土地上發生過的世代記憶。
                  </div>
                  <div class="place">
                  ｜裝置作品｜<br/>
                  時間：05.08 - 05.28｜09：00 - 18：00 <br/>
                  地點：博雅草坪、文學院前、社科草坪、陳文成廣場
                  ｜校園導覽｜<br/>
                  時間：05.10、05.17、05.24 | 10:00 - 10:40、13:00 - 13:40 <br/>
                  地點：博雅草坪、文學院前、社科草坪、陳文成廣場
                  </div>
                </div>
              </div>
            </mu-col>
          </mu-row>
        </div>
        <div class="project">
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
              <div
              class="project-img"
              :style="{ 'background-image': 'url(' + gloomy + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">相／鬱</div>
                <div class="discription">
                  <div>
                  隨著科技進步,在這人人皆為自媒體的時代,表露自己變得更加容易卻也更加困難,
                  濾鏡、 修圖軟體種類推陳出新,人們無不在社群媒體上營造出一個最好的自己,而在那同
                  時卻缺乏看見真實的自己的勇氣,受制於他人的眼光。
                  </div>
                  <br/>
                  <div>
                  我們希望藉由專案反轉人們對於自拍的理解,讓自我肖像成為 一種情緒引導的方式, 面對鏡頭並褪去自己的所有包袱,把情緒投射於空間,呈現出你認為的自己,而非他人期 待的你。
                  </div>
<!--                   <div class="place">
                  ｜裝置作品｜<br/>
                  時間：05.08 - 05.28｜09：00 - 18：00 <br/>
                  地點：博雅草坪、文學院前、社科草坪、陳文成廣場
                  ｜校園導覽｜<br/>
                  時間：05.10、05.17、05.24 | 10:00 - 10:40、13:00 - 13:40 <br/>
                  地點：博雅草坪、文學院前、社科草坪、陳文成廣場
                  </div> -->
                </div>
              </div>
            </mu-col>
          </mu-row>
        </div>
        <div class="project">
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
              <div
              class="project-img"
              :style="{ 'background-image': 'url(' + see + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">目集</div>
                <div class="discription">
                  <div>
                  隨著科技進步,在這人人皆為自媒體的時代,表露自己變得更加容易卻也更加困難,
                  濾鏡、 修圖軟體種類推陳出新,人們無不在社群媒體上營造出一個最好的自己,而在那同
                  時卻缺乏看見真實的自己的勇氣,受制於他人的眼光。
                  </div>
                  <br/>
                  <div>
                  我們希望藉由專案反轉人們對於自拍的理解,讓自我肖像成為 一種情緒引導的方式, 面對鏡頭並褪去自己的所有包袱,把情緒投射於空間,呈現出你認為的自己,而非他人期 待的你。
                  </div>
<!--                   <div class="place">
                  ｜裝置作品｜<br/>
                  時間：05.08 - 05.28｜09：00 - 18：00 <br/>
                  地點：博雅草坪、文學院前、社科草坪、陳文成廣場
                  ｜校園導覽｜<br/>
                  時間：05.10、05.17、05.24 | 10:00 - 10:40、13:00 - 13:40 <br/>
                  地點：博雅草坪、文學院前、社科草坪、陳文成廣場
                  </div> -->
                </div>
              </div>
            </mu-col>
          </mu-row>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import Sponser from '@/components/Sponser';
import Hero from '@/components/Hero';
import Department from '@/components/Department';
import Event from '@/components/Event';
import Foot from '@/components/Footer';
import NavBar from '@/components/NavBar';
// import introduce from './components/introduce';

export default {
  name: 'academic',
  components: {
    Sponser,
    Hero,
    Department,
    Event,
    Foot,
    NavBar,
  },
  extends: {
    data() {
      return {
        backgroundImage: 'static/images/artproject_bien/artproject_bien.png',
        queer: 'static/images/academic/queer.png',
        artfood: 'static/images/academic/art&food.png',
        retro: 'static/images/academic/retro.png',
        gloomy: 'static/images/academic/gloomy.jpg',
        see: 'static/images/academic/see.png',
        mysterious: 'static/images/artproject_bien/mysterious.png',
      };
    },
  },
};
</script>

<style lang="sass" scoped>

@import '../sass/settings'
.wrapper
  margin: 20px 0
.row
  margin: 0 2rem
.hero
  height: 580px
  width: 100%
  @extend ._bcg-cover
.section
  max-width: 1280px
  margin: 10px auto
.intro
  max-width: 600px
  margin: 30px auto
  text-align: center
  font-size: 1.2em
  line-height: 1.5em
  padding: 10px 20px
  div
    padding: 10px 0
  .title
    font-size: 1.4em
    line-height: 1.5em
    padding-bottom: 10px
    text-align: center
.project-list
  margin: 30px 0
  .title
    font-size: 1.4em
    line-height: 1.5em
    padding-bottom: 10px
    text-align: center
  .list
    li
      display: block
      font-size: 1.2em
      line-height: 3em
      text-align: left
.project
  margin: 32px 0
  .project-img
    height: 400px
    width: 100%
    @extend ._bcg-cover
  .title
    font-size: 1.2em
    font-weight: 900
    text-align: left
    padding-bottom: 10px
  .discription
    text-align: left
    font-size: 1em
    line-height: 1.5em
  .place
    font-size: 0.8em
    padding: 15px 0
    line-height: 1.4em
  .more
    border: 1px solid $theme
    padding: 0.2em 1em
    color: $theme
    font-size: 1.2em
    &:hover
      background: $theme
      color: #fff

</style>
