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
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="100">
              <div class="fb-video"
              data-href="https://www.facebook.com/NTUartfest/videos/1357235894314831/"
              data-allowfullscreen="true"
              data-autoplay="false"
              data-show-captions="true">
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="33">
            專案一覽表
            </mu-col>
            <mu-col width="100" tablet="50" desktop="33">
              <div class="list">
                <li :class="{active:scrollPos == 0}">
                <a @click="$scrollTo(0)">
                  【政治正確的精神錯亂】編導式攝影展
                  </a>
                </li>
                <li :class="{active:scrollPos == 1}">
                 <a @click="$scrollTo(1)">
                 【畫像｜畫相】臉譜展覽與工作坊
                 </a>
                </li>
                <li :class="{active:scrollPos == 2}">
                  <a @click="$scrollTo(2)">
                  【邃】互動裝置藝術
                  </a>
                </li>
                <li :class="{active:scrollPos == 3}">
                  <a @click="$scrollTo(3)">
                  【形意】裝置藝術
                  </a>
                </li>
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="33">
              <div class="list">
                <li :class="{active:scrollPos == 4}">
                  <a @click="$scrollTo(4)">
                  【妖易】實境劇場
                  </a>
                </li>
                <li :class="{active:scrollPos == 5}">
                  <a @click="$scrollTo(5)">
                  【烏合】影像創作與行為藝術
                  </a>
                </li>
                <li :class="{active:scrollPos == 6}">
                  <a @click="$scrollTo(6)">
                  【WHAT If】舞蹈劇場
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
              :style="{ 'background-image': 'url(' + political + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">政治正確</div>
                <div class="discription">
                  <div>政治正確的精神錯亂編導式攝影展</div>
                  <br/>
                  <div>
                 民主政體及資本主義的制度下，⼈民作主的美意應是建構在⼈⼈皆有⽴場與中⼼思想的基礎上，然⽽「政治正確」掌握了話語權，因此成為有⼼⼈⼠操弄議題的⼯具。許多⼈為正確而正確，跟⾵盲從，卻對於該議題沒有深⼊探討琢磨，有時甚⾄⽀持者⾼喊的⼝號與其所作所為有所⽭盾，如同「精神錯亂」⼀般卻不⾃知。
                  </div>
                   <div>本專案將以編導式攝影的創作形式，藉國族認同及婚姻平權兩大議題作發想，希望藉安排在靜態畫⾯中的細節，表現出目前臺灣社會中普遍被認同的政治正確性事件及其⽭盾。</div>
                  <div class="place">
                  05.16 - 05.25｜09：00 - 18：00<br/>
                  05.26｜9：00 - 13：00 <br/>
                  博雅中央走廊
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
              :style="{ 'background-image': 'url(' + portrait + ')' }"
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
              :style="{ 'background-image': 'url(' + shape + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">形意</div>
                <div class="discription">
                  <div>
                  藝術或是創作這件事，該有一個可批判的標準嗎？
                  </div>
                  <div>
                  由八位創作者共同創作三幅立體作品，使用各種複合媒材（包含油漆、顏料、木材、金屬、燈光等）在畫上添加各自的痕跡，創作者不賦予作品背後的概念或是想法，而是由觀看者去賦予它意義。藉由作品闡述權力的移轉，模糊創作者與觀看者之間的界線，創造觀眾與創作者身分之間的轉換與對話。
                  </div>
                  <div class="place">
                  ｜展覽｜<br/>
                  時間：05.05 - 05.28｜09：00 - 18：00 <br/>
                  地點：霖澤館、模擬法庭間廣場
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
              :style="{ 'background-image': 'url(' + demon + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">妖意</div>
                <div class="discription">
                  <div>都市中有許多的妖魔鬼怪，長相與人並無差異，混在人群中與人類共同生活。</div>
                  <div>
                  關於妖怪的資訊人們多由口耳相傳得知，再以口耳相傳告知。久而久之，就連原先的妖怪們聽到關於自己的傳說，都還以為是都市中新來了一批比自己更可怕的妖怪。妖怪究竟是原本就存在於世界上的生物，還是人類訛言下的產物？
                  </div>
                  <div class="place">
<!--                   ｜裝置作品｜<br/> -->
                  時間：05.13 - 05.14｜16:30~19:30  <br/>
                  地點：社科院 3F 學習開放空間 & 西側桌椅區<br/>
<!--                   ｜校園導覽｜<br/> -->
                  時間：05.20 - 05.21｜16:30~19:30  <br/>
                  地點：第一學生活動中心 B1 文藝展示室
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
              :style="{ 'background-image': 'url(' + crow + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">烏合</div>
                <div class="discription">
                  <div>
                  面對社會所形塑出的主流價值，為了融入人群、抑或是為了更加突出，人們是否會將自我變形……？
                  </div>
                  <br/>
                  <div>影像創作</div>
                  <div>｜從眾效應｜05.15 - 05.17 ｜09：00 - 18：00 活大104</div>
                  <div>從動畫裡看到最真實的人性，一窺從眾化的樂觀面與悲觀面。</div>
                  <div>｜標籤化｜05.18 - 05.20｜09：00 - 18：00 活大104</div>
                  <div>以訪談的形式對身體自主權展開一系列辯論。</div>
                  <div>｜網路暴力｜05.21 - 05.22｜09：00 - 18：00 活大104</div>
                  <div>五分鐘的紀錄片帶你走進受害者眼裡的世界。</div>
                  <div>行為藝術</div>
                  <div>｜裸｜05.15 - 05.19｜12：30 活大104</div>
                  <div>人們是否還願意脫下網路世界的保護膜，以最赤裸的狀態面對他人的注視與評論？</div>
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
              :style="{ 'background-image': 'url(' + whatif + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">What If</div>
                <div class="discription">
                  <div>身份及角色隨著時空不斷變形。</div>
                  <div>
                  「What If」以街舞舞蹈劇場形式呈現一故事劇情，舞台的設計環繞著觀者，讓觀眾仿佛身在表演的劇情之中伴隨著舞者體驗著各種抉擇以及之後的結果，藉以表達人在生命當中，時常面臨看似稀鬆平常的選擇，卻往往能深遠地影響著你我。
                  </div>
                  <a href="https://www.facebook.com/events/433819283640359/">【WHAT If】舞蹈劇場</a>
                  <a href="https://ntuaf23.backme.tw/shops/515?checked=true&locale=zh-TW">前往購票</a>
                  <div class="place">
                  ｜舞蹈劇場｜<br/>
                  場次及地點：  <br/>
                  05.26｜19:30 - 20:30<br/>
                  05.27｜14:30 - 15:30<br/>
                  05.27｜19:30 - 20:30<br/>
                  05.28｜14:30 - 15:30<br/>
                  地點：第一學生活動中心B1 文藝展示室
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
        backgroundImage: 'static/images/artproject_bien/artproject_bien.png',
        queer: 'static/images/academic/queer.png',
        artfood: 'static/images/academic/art&food.png',
        retro: 'static/images/academic/retro.png',
        gloomy: 'static/images/academic/gloomy.jpg',
        see: 'static/images/academic/see.png',
        mysterious: 'static/images/artproject_bien/mysterious.png',
        political: 'static/images/artproject_bien/political.png',
        portrait: 'static/images/artproject_bien/portrait.png',
        shape: 'static/images/artproject_bien/shape.png',
        demon: 'static/images/artproject_bien/demon.jpg',
        crow: 'static/images/artproject_bien/crow.png',
        whatif: 'static/images/artproject_bien/whatif.png',
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
