<template>
  <transition appear name="fade">
  <div>
    <navBar></navBar>
    <div v-if="false"
      class="hero"
      :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
    >
    </div>

    <div class="wrapper">
      <div class="section">
        <div class="intro">
          <div class="title">常策展部｜理念介紹</div>
          <div>常是一種自然，是毫無意識的累積、是日復一日的循環。我們總是週期性地失落、習慣性地微笑，在一成不變的日子裡練習生活，學會世界上不言而喻的規則，然後安然地，隱身其中。</div>
          <div>《希望透過與場域與身分的對話，對質日常裡的秩序與荒謬，重新看待自身存在的環境與角色，也許適應，也許破解。日常本就是那些看似永恆不變，卻又難以掌握的。</div>
        </div>
        <div class="project-list">
          <mu-row gutter>
            <mu-col v-if="false" width="100" tablet="50" desktop="100">
<!--               <div class="fb-video"
              data-href="https://www.facebook.com/NTUartfest/videos/1357235894314831/"
              data-allowfullscreen="true"
              data-autoplay="false"
              data-show-captions="true">
              </div> -->
              <youtube :video-id="videoId" class="youtube"></youtube>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="33">
            專案一覽表
            </mu-col>
            <mu-col width="100" tablet="50" desktop="33">
              <div class="list">
                <li :class="{active:scrollPos == 0}">
                <a @click="$scrollTo(0)">
                  局外人 Outsider
                  </a>
                </li>
                <li :class="{active:scrollPos == 1}">
                 <a @click="$scrollTo(1)">
                  常·視
                 </a>
                </li>
                <li :class="{active:scrollPos == 2}">
                  <a @click="$scrollTo(2)">
                  觀 LOG IN
                  </a>
                </li>
                <li :class="{active:scrollPos == 3}">
                  <a @click="$scrollTo(3)">
                 動木園．ANIMOOD
                  </a>
                </li>
                <li :class="{active:scrollPos == 4}">
                  <a @click="$scrollTo(4)">
                 日日 Shadows of Day
                  </a>
                </li>
              </div>
            </mu-col>
          </mu-row>
        </div>
        <div v-scroll-spy="scrollPos">
        <div class="project" >
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="50">
              <div
              class="project-img"
              :style="{ 'background-image': 'url(' + entrance + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">局外人 Outsider</div>
                <div class="discription">
                  <div>本專案旨在打破慣性日常，誇大多數人以為的反日常行為。</div>
                  <div>
                 現代人總是能夠輕易地將不舒適的狀態予以隔絕，像是戴上耳機，使自身平行於外在嘈雜世界；輕易低頭，用科技化解面對面的尷尬；抑或是自我說服，將責任交付他人而拒絕承擔。
                  </div>
                   <div>希望透過行為藝術的展現，試著使觀眾習慣潛意識裡認知的反日常行為、不正常狀態，不再以局外人角度去看待他人日常。</div>
                  <div class="place">
                  時間：05.04｜10:00 - 13:00<br/>
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
              :style="{ 'background-image': 'url(' + dance + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">常·視</div>
                <div class="discription">
                  <div>在日常的隧道中，來來往往的人看到的風景不盡相同。</div>
                  <div>
                    人生中的事情總是一體兩面的，一道光灑下，我們看到的究竟是明面或是暗面？透過存在你我周遭的環污議題，我們呈現給觀眾相異的立場，闡述在不同的觀點和想法下，即使雙方遇到完全相同的情況，也會產生南轅北轍的日常。
                  </div>
                  <div>
                    「常視」，常即日常，視並非指物理上的看，而是指人的視角和觀點。另外，取其諧音「常識」，每個人自認為的常識都不同，也凸顯「相異」的理念。
                  </div>
                  <div class="place">
                  時間：05.07 - 05.15｜09:00 - 21:00  <br/>
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
              :style="{ 'background-image': 'url(' + login + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">觀 LOG IN</div>
                <div class="discription">
                  <div>
                    隨著網路世代的崛起，諸多作為連結虛擬與現實橋樑的社群網站、輿論平台逐漸蠶食著我們以現實為基調的日常生活。</div>
                  <div>
                    我們將以實境劇場的形式，藉由不同空間之間的轉換，呈現出現實世界與虛擬世界是如何密切關聯，且難以切割，更讓現場觀眾走入舞台，成為演出的一部分。
                  </div>
                  <div>
                    此外，我們亦將演出空間自現實端延伸至虛擬端—正式演出前於網路討論區發表與劇情密切關聯之楔子，以及正式演出時透過直播平台同步放送演出內容。鄉民的推噓文以及聊天室的回應也會呈現於劇情中，甚至可能影響劇情走向⋯⋯。
                  </div>
                  <div class="place">
                  時間：05.11｜18:30 - 21:30、05.12｜16:30 - 20:00、05.13｜16:30 - 20:00  <br/>
                  地點：第一活動中心 地下室
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
              :style="{ 'background-image': 'url(' + fear + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">動木園．ANIMOOD</div>
                <div class="discription">
                  <div>
                 本專案是以裝置藝術的形式在臺大放置動物木板藝術，並使用青苔塗鴉，讓它隨著時間長出綠意，賦予裝置藝術生命，讓它能真正地與人們「活」在一起、融入臺大，成為日常的一角；並在展出過程中藉由每天在不同角度、不同時辰所拍下的照片，見證青苔的生長、時間的流轉，讓觀眾去反思，究竟何為「常」，又其真如我們直覺所想的，一成不變嗎？
                  </div>
                  <div class="place">
                  時間：3月 - 5月<br/>
                  地點：鹿鳴草皮、振興草皮
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
              :style="{ 'background-image': 'url(' + sod + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">日日 Shadows of Day</div>
                <div class="discription">
                  <div>
                  日，是人們私自將時間以太陽的軌跡定義的最小單位。
                  </div>
                  <div>
                  日日，是三段以光的角度講述時間的詩，重複播放的今日，假扮今日的昨日，以及尚未構築的明日，而今日又拖曳著昨日，跨進明日的洞裏。
                  </div>
                  <div class="place">
                  時間：05.18｜19：00 - 20：00、05.19｜19：00 - 20：00<br/>
                  地點：舊體育館 2F桌球室
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
        backgroundImage: 'static/images/artproject_xing/hero.png',
        entrance: 'static/images/artproject_xing/entrance.png',
        dance: 'static/images/artproject_xing/dance.png',
        fear: 'static/images/artproject_xing/fear.jpg',
        cyborg: 'static/images/artproject_xing/cyborg.png',
        videoId: 'CWaSJNicnDM',
        sod: 'static/images/artproject_chang/Image_d312415.jpg',
        login: 'static/images/artproject_chang/Image_5492c75.jpg',
      };
    },
  },
  methods: {
    goAnchor(selector) {
      const anchor = this.$el.querySelector(selector);
      document.body.scrollTop = anchor.offsetTop - 100;
    },
  },
};

        // $('.subnav a').click(function(){
        //     $('html, body').animate({
        //         scrollTop: $( $(this).attr('href') ).offset().top-120
        //     }, 500);
        //     console.log('123')
        //     return false;
        // });
</script>

<style lang="sass" scoped>

@import '../sass/settings'
a
  // color: #000
  display: inline-block
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
    font-size: 1.6em
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
<style lang="sass" scoped>
  @media only screen and (max-width: 768px)
    .hero
      height: 280px
    .project
      .project-img
        height: 200px
        margin-bottom: 10px
</style>
