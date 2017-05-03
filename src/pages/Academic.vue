<template>
  <transition appear name="fade">
  <div>
    <div :class="loader" class="loader">
      <img class="animation" src="static/images/hero/hero_headgif.gif">
    </div>
    <navBar></navBar>
    <div
      class="hero"
      :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
    >
    </div>
    <div class="wrapper">
      <div class="section">
        <div class="intro">
          <div class="title">學術策展部｜理念介紹</div>
          <div>每個世代，都有著他們獨自的美麗與悲愁，而隨著時間不斷的推移，思想、正義跟隨世代一起變形。</div>
          <div>學術策展部旨在介紹並結合藝術形式與各式議題，透過講座、攝影作品與裝置藝術等多樣的藝術形式，進行各種不同議題的觀點與介紹，希望藉由藝術的角度看見不一樣的生活，進而對社會現況有所反思。</div>
        </div>
        <div class="project-list">
          <div class="title">專案一覽</div>
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="100">
              <div class="fb-video"
              data-href="https://www.facebook.com/NTUartfest/videos/1358243914214029/"
              data-allowfullscreen="true"
              data-autoplay="false"
              data-show-captions="true">
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div class="list">
                <li :class="{active:scrollPos == 0}">
                  <a @click="$scrollTo(0)">
                  【相／鬱】自我肖像藝術實驗計畫
                  </a>
                </li>
                <li :class="{active:scrollPos == 1}">
                  <a @click="$scrollTo(1)">
                  【以食為藝】飲食文化探究
                  </a>
                </li>
                <li :class="{active:scrollPos == 2}">
                  <a @click="$scrollTo(2)">
                【Bon Vogue】性別議題。舞蹈展演
                  </a>
                </li>
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div class="list">
                <li :class="{active:scrollPos == 3}">
                  <a @click="$scrollTo(3)">
                【Queer & Space】性別議題。攝影展
                  </a>
                </li>
                <li :class="{active:scrollPos == 4}">
                  <a @click="$scrollTo(4)">
                【目集】轉型正義。影展
                  </a>
                </li>
                <li :class="{active:scrollPos == 5}">
                  <a @click="$scrollTo(5)">
                  【溯】轉型正義。裝置藝術
                  </a>
                </li>
              </div>
            </mu-col>
          </mu-row>
        </div>

        <div v-scroll-spy="scrollPos">
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
              :style="{ 'background-image': 'url(' + artfood + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title"> 以食為藝</div>
                <div class="discription">
                  <div>
                食物作為日常生活中不可或缺的能量來源，當中的概念不只是果腹與飽足，還包含著孕育出食物原料的自然風土及烹飪與飲食的人文風情，以及關於個性和情感的表達。 《以食為藝》將透過「藝術／技藝／生產／消費」四個主題的文字書寫，深入食物的文化面。
                  </div>
                  <br/>
                  <div>
                  另外，我們也將透過講座，對臺灣這塊土地上所生產出來的食物，更進一步接觸與了解。 「食」是像動物呼吸一般自然的行為，我們每天都在經歷它，但《以食為藝》將與你一起跳脫「平常」，用不同的角度來體驗「食」這件事情。
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
              :style="{ 'background-image': 'url(' + bonvogue + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">Bon Vogue</div>
                <div class="discription">
                  <div>
                  桑格塔「敢曝札記」中提出刻意放大並倒錯性別的美學觀。性別跨演模糊了男女的二元對立性，專案將藉由Voguing此種強調柔軟與陰性氣質的舞蹈表演，並輔以紀錄片呈現說明，製造出一種抗逆「理當如此」的顛覆性美學，破除人們對於性別的刻板印象。
                  </div>
                  <div class="place">
                  ｜紀錄片｜<br/>
                  展期：04.24 - 05.12｜09：00 - 18：00<br/>
                  地點：第一學生活動中心、博雅電視牆<br/>
                  ｜舞蹈展演｜<br/>
                  展期：05.05｜21：00 開幕式Afterparty<br/>
                  地點：第一學生活動中心 公共空間
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
              :style="{ 'background-image': 'url(' + queer + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">Queer ＆ Space</div>
                <div class="discription">
                  <div>
                  廣義上，Queer（酷兒）泛指非主流性別、性傾向及性實踐者，但更有人說，Queer一詞亦可作為「不同於任一個族群、自居邊緣並拒絕被主流同化」的自我宣稱。
                  </div>
                  <br/>
                  <div>
                  空間是人們生活的座標，而當意義被加諸其上，空間便成了地方。 當社會以法律規範一夫一妻的婚姻正當性，便使 Queer 這般不在此範圍內的群體，逾越了社會所建構的地方，顯得「格格不入（out of place）」，進而再次創造屬於自己的地方。
                  </div>
                  <br/>
                  <div>
                  《Queer & Space》將透過攝影作品與訪談，呈現 Queer 透過身體與空間互動的故事， 那些關於逾越社會既有界線，以及關於創造集體或個人地方的過程，而這些生命經驗最終都指向一件事：讓他/她/它得以成為自己。
                  </div>
                  <div class="place">
                  ｜攝影展｜<br/>
                  展期：05.05 - 05.26 | 10：00 - 21：00<br/>
                  地點：校史館夾層書庫<br/>
                  ｜紀實文字作品｜<br/>
                  展期：05.09 - 05.26｜00：00 - 23：59<br/>
                  地點：臺大藝術季網站
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
      </div>
      </div>
    </div>
    <foot></foot>
  </div>
  </transition>
</template>

<script>
// eslint-disable-next-line import/no-webpack-loader-syntax
import Pace from 'imports-loader?define=>false!pace-progress';

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
        scrollPos: 0,
        backgroundImage: 'static/images/academic/academic.png',
        queer: 'static/images/academic/queer.png',
        artfood: 'static/images/academic/art&food.png',
        retro: 'static/images/academic/retro.png',
        gloomy: 'static/images/academic/gloomy.jpg',
        see: 'static/images/academic/see.png',
        bonvogue: 'static/images/academic/bonvogue.jpg',
        loader: '',
      };
    },
  },
  created() {
    // const timestamp = new Date();
    Pace.start({
      ajax: false,
    });
    Pace.on('done', () => {
      // console.log('done');
      // console.log(new Date() - timestamp);
      this.loader = 'hidden';
    });
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
  margin: 20px 0
  padding-top: 4em
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

<style lang="sass">
.hidden
  display: none
.show
  display: block
.animation
  width: 100px
  margin: 0 auto
  position: fixed
  left: 0
  right: 0
  top: 45%
.loader
  width: 100vw
  height: 100vh
  background: #E4EDEE
  position: fixed
  top: 0
  right: 0
  z-index: 100
</style>
