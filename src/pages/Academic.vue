<template>
  <transition appear name="fade">
  <div>
    <navBar></navBar>
    <div v-if="true"
      class="hero"
      :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
    >
    </div>
    <div class="wrapper">
      <div class="section">
        <div class="intro">
          <div class="title">學術策展部｜理念介紹</div>
          <div>藝術不應該只是一種形式，而是一種生活態度。以每一個你我為起點，學術部探尋藝術與日常生活乃至於社會的各種關連，藉由攝影、電影與文字等多元形態，試圖重建一個內在與外在兼具的新美學觀。</div>
          <div>我們志在搭起藝術與群眾之間的橋樑，透過工作坊及講座啟發參與者對美的多元想像，進而在各式策展中提供共同創作環境，深化藝術在校園中的長遠影響力。</div>
        </div>
        <div class="project-list">
          <div class="title">專案一覽</div>
          <mu-row gutter>
            <mu-col v-if="false" width="100" tablet="50" desktop="100">
<!--               <div class="fb-video"
              data-href="https://www.facebook.com/NTUartfest/videos/1358243914214029/"
              data-allowfullscreen="true"
              data-autoplay="false"
              data-show-captions="true">
              </div> -->
              <youtube :video-id="videoId" class="youtube"></youtube>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div class="list">
                <li :class="{active:scrollPos == 0}">
                  <a @click="$scrollTo(0)">
                  【・上線中】
                  </a>
                </li>
                <li :class="{active:scrollPos == 1}">
                  <a @click="$scrollTo(1)">
                  【再構空間】
                  </a>
                </li>
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div class="list">
                <li :class="{active:scrollPos == 2}">
                  <a @click="$scrollTo(2)">
                【POST REASON】
                  </a>
                </li>
                <li :class="{active:scrollPos == 3}">
                  <a @click="$scrollTo(3)">
                【反飾】
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
                <div class="title">・上線中</div>
                <div class="discription">
                  <div>
                  當社群媒體改變你我生活模式、成為無法割捨的平台已成事實，社群媒體對於不同的人的意義是什麼？它還有什麼可能性？
                  我們將規劃有四個主題展間的互動式體驗展覽，以趣味的方式呈現不同的人對於社群媒體的功能需求，以及該功能之特性，讓人看見社群媒體不同功能的可能性，也進一步邀請大家一起來思考社群媒體下一個可能。
                  </div>
                  <br/>
                  <div>
                  我們的座談則邀請到在以網路與心理研究領域著名的王智弘教授作為主講人，與白癡公主、蔡傑曦和Gino脖子三位網路名人現身說法，分享在社群媒體上對於隱私的拿捏、呈現的公眾形象和面對評論的心情，以及在使用個人帳號與公共帳號時，使用社群媒體不同的目的與想法。希望能藉此瞭解人們在社群網站（舞台）展演的過程和內心的考量，最後回到後台是如何自處，以及探討當今社群媒體對於一般大眾以及「公眾人物」的意義與個人隱私的關係。
                  </div>
                  <div class="place">
                  ｜講座｜<br/>
                  時間：05.08｜19：00 - 21：00<br/>
                  地點：第二活動中心 3樓 global lounge<br/>
                  ｜互動式展覽｜<br/>
                  時間：05.16｜12:00 - 21:30、05.17 - 05.25｜9:00 - 21:30<br/>
                  地點：第一學生活動中心 B1藝文展示空間<br/>
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
              :style="{ 'background-image': 'url(' + artfood + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">再構空間</div>
                <div class="discription">
                  <div>
                    個人之於公共空間，猶如「單子」之於宇宙全體。
                  </div>
                  <br/>
                  <div>
                  我們創造空間，並賦予空間意象，但同時，空間也反過來形塑我們對於世界的認知。我們會以自己對場域的詮釋、與他者之間的關係，
                  而調整在公共空間中所扮演的角色，這究竟是我們畫地自限呢？還是空間賦予我們的印象？
                  藉由一系列的活動，以「點」作為起點，破除空間的刻板印象，重新建構公共空間的可能性。
                  </div>
                  <div class="place">
                  ｜午睡計畫｜<br/>
                  時間：05.12｜10:00 - 15:00<br/>
                  ｜偏見地圖｜<br/>
                  時間：05.14｜11:00 - 17:00<br/>
                  ｜再構廣場｜<br/>
                  時間：05.19｜10:00 - 15:00<br/>
                  地點：陳文成紀念廣場<br/>
                  ｜講座｜<br/>
                  時間：05.11｜19:00 - 21:00<br/>
                  地點： 第一活動中心 202教室
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
                <div class="title">POST REASON</div>
                <div class="discription">
                  <div>
                  在科學理性與宗教信仰/感性藝術似乎呈現二元對立、難以互相理解的時代，我們其實經常忘記，人類都是在透過不同的方式，無論是以科學或邏輯、或是與神的連結也好，在探尋人類的存在與意義。此專案希望透過不同的形式，來理解人類社會中不同的信仰，從相異中找尋共性、從互斥中找到共鳴。透過這樣的相互理解與交流，找到多元之間共存的可能性。
                  </div>
                  <div class="place">
                  ｜講座｜<br/>
                  迷信，還是民俗－溫宗翰老師<br/>
                  地點：第二活動中心 603教室<br/>
                  ｜工作坊｜<br/>
                  科學中的藝術－一奈米的宇宙工作坊<br/>
                  地點：第二活動中心 601教室
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
              :style="{ 'background-image': 'url(' + fanshih + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">反飾</div>
                <div class="discription">
                  <div>
                  「反飾」取「反噬」和「反視」的諧音，試圖探討個人的性格、行為和心理，如同鏡子般，從他人故事反思自己，在想法中的某一塊，是否被吞噬了?
                  </div>
                  <br/>
                  <div>
                  網路、媒體、雜誌書籍等等，這些看來平常的事，其實都在一點一滴地在我們的潛意識當中成形，具現化成「我」。因著神經觸到何種刺激形成了我們的內心精神想法，最終發展成行為，以及個人價值觀。
                  </div>
                  <br/>
                  <div>
                    透過角色的故事，我們將探討生活，每一步刺激，又將造成甚麼影響，而這個影響是好是壞，完全取決於將自己的腦暴露在何種環境
                  </div>
                  <div class="place">
                  ｜互動式劇場｜<br/>
                  時間：05.16 - 05.18、05.23 - 05.25 | 19：00 - 21：00<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;05.19 - 05.20 | 14：30 - 16：30<br/>
                  地點：公館靈感咖啡<br/>
                  ｜講座｜<br/>
                  生活上的刺激對於人格與性格養成影響： 知名Youtuber│超級歪<br/>
                  時間：05.21 ｜ 18:30 - 21:30<br/>
                  地點：新生教學館 201教室<br/>
                  多元劇場形式的可能： 前台北藝術節藝術總監│耿一偉<br/>
                  時間：05.22 ｜ 18:30 - 21:30<br/>
                  地點：新生教學館 201教室<br/>
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
        backgroundImage: 'static/images/hero/header-web.jpg',
        fanshih: 'static/images/academic/Image_7ea3cb6.jpg',
        queer: 'static/images/academic/queer.png',
        artfood: 'static/images/academic/art&food.png',
        retro: 'static/images/academic/retro.png',
        gloomy: 'static/images/academic/gloomy.jpg',
        see: 'static/images/academic/see.png',
        bonvogue: 'static/images/academic/bonvogue.jpg',
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
#app > div 
  background-color: #FFFCFD
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
  margin: 20px auto
  min-width: 980px
  width: 80%
  padding-top: 4em
  .row
    background-color: #fff
    box-shadow: 0 5px 20px -5px rgba(50, 50, 93, 0.12), 0 3px 4px -2px rgba(0, 0, 0, 0.08)
    transition-duration: .15s
    &:hover
      box-shadow: 0 30px 75px -15px rgba(50, 50, 93, 0.3), 0 25px 40px -20px rgba(0, 0, 0, 0.1)
      transition-duration: .15s
    > div:nth-child(2)
      padding: 30px 20px 20px 10px
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
<style lang="sass" scoped>
  @media only screen and (max-width: 768px)
    .hero
      height: 280px
    .project
      min-width: auto
      width: 90%
      .project-img
        height: 200px
        margin-bottom: 10px
      .row
        margin: 0
</style>
<style lang="sass">
  .youtube
    margin-bottom: 20px
    iframe
      width: 100%
      height: 640px
  @media only screen and (max-width: 768px)
    .youtube
      iframe
        width: 100%
        height: 240px
</style>

