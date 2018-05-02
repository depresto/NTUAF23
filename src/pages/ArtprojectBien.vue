<template>
  <transition appear name="fade">
  <div
    class="bg"
  >
    <navBar></navBar>
    <div
    v-if="false"
      class="hero"
      :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
    >
    </div>
    <div class="wrapper">
      <div class="section">
        <div class="intro">
          <div class="title">憶策展部｜理念介紹</div>
          <div>我們每個人都有一個看得見，摸得到的軀殼，然而真正證明我們存在的是沒有形體的記憶。記憶同時是極為個人的也是屬於群體的；它造就我們的情感、思想，卻又稍縱即逝;是身為人的真實紀錄，同時經常是捏造、嫁接、竄改出來的。</div>
          <div>透過對記憶多重性質的認識與重新詮釋和想像，我們希望去挖掘記憶與人之間，形塑，支配，保存等錯綜複雜又習以為常的關係。</div>
        </div>
        <div class="project-list">
          <mu-row gutter>
            <mu-col v-if="false" width="100" tablet="100" desktop="100">
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
                  【歧憶】
                  </a>
                </li>
                <li :class="{active:scrollPos == 1}">
                 <a @click="$scrollTo(1)">
                 【匯憶】
                 </a>
                </li>
                <li :class="{active:scrollPos == 2}">
                  <a @click="$scrollTo(2)">
                  【憶測】
                  </a>
                </li>
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="33">
              <div class="list">
                <li :class="{active:scrollPos == 3}">
                  <a @click="$scrollTo(3)">
                  【交憶】
                  </a>
                </li>
                <li :class="{active:scrollPos == 4}">
                  <a @click="$scrollTo(4)">
                  【啟憶】
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
              :style="{ 'background-image': 'url(' + chi + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div class="introduce">
                <div class="title">歧憶 Forking Path</div>
                <div class="discription">
                  <div>
                    在面對同一段群體記憶時，因為不同的生命脈絡，選擇的記憶路徑不盡相同，而產生「歧憶」。
                  </div>
                  <div>
                    記憶就像一部蒙太奇式電影，不限時空的拼貼剪輯。
                  </div>
                  <div>
                    在回憶的過程中，可能會有記憶的變形，包含扭曲、重組、遺忘、重播，但記憶並不會因此變成我們想要的樣子：即便更痛苦或更美好，也已經過竄改而無法辨認。
                  </div>
                  <div>
                    我們想以舞者的肢體結合影像來詮釋群體記憶的異質性。
                  </div>
                  <div>
                    讓觀眾在回憶與不被回憶、理解與不被理解的落差之間，反思如何在人與人記憶的隔閡下自處。
                  </div>
                  <div class="place">
                  時間：05.12｜19：00 - 20：00（18:40開始入場）<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;05.13｜15：00 - 16：00、19：00 - 20：00（18:40開始入場）<br/>
                  地點：博雅館一樓圓桌區
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
              :style="{ 'background-image': 'url(' + portrait + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div class="introduce">
                <div class="title"> 匯憶</div>
                <div class="discription">
                  <div>
                    「人與人之間，究竟能不能相互理解呢？」台灣目前的社會上存在著很多的分歧、衝突，以及值得需要被探討的議題，而這些困境並非一朝一夕，一個人的力量能夠解決。但我們相信就算不能實際立即地改變現狀，倘若人與人之間能夠多一份瞭解，換位思考，或許就能減少悲傷和衝突發生。
                  </div>
                  <div class="place">
                  ｜實驗｜<br/>
                  時間：04.01 - 04.30<br/>
                  ｜裝置藝術｜<br/>
                  時間：05.01 - 05.31<br/>
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
              <div class="introduce">
                <div class="title">憶測</div>
                <div class="discription">
                  <div>
                    「眼連著腦，腦連著神經系統。這系統瞬息之間就把訊息傳遞給往昔的回憶及當前的感受。」— 吳爾芙，Three Guineas
                  </div>
                  <div>
                 科學家認為，記憶的生產牽涉了複雜的腦內運動，是大量的化學反應。即使如此，其仍然無法解釋記憶檔案之間交融與錯置的可能。憶測，即是對個體的記憶進行測驗，文本間編碼與指涉的互文性，誘發觀者生產自身的價值取向。在這裡，意義的生產是文化與政治的碰撞、是真實與幻象的戰役、是個體與機構的對抗。
                  </div>
                  <div class="place">
                  時間： 05.07 - 05.25｜09:00 - 18:00<br/>
                  地點：第一活動中心 水池/植物走廊<br/>
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
              :style="{ 'background-image': 'url(' + shape + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div class="introduce">
                <div class="title">交憶</div>
                <div class="discription">
                  <div>
                  交，縱橫錯雜之意，如同理還亂的記憶與情緒。假使那些層層疊疊的「東西」無法被切片，那麼以不同的角度去翻轉與再定義，是否因而有趣？
                  </div>
                  <div>
                  誠摯邀請每一個複雜的靈魂在此展開記憶的交疊，而如果幸運，我們或許不經意複寫彼此的之前，或以眼神交會共同盲猜當下，或將自己的在場以某種證明遺留之後。
                  </div>
                  <div>
                  這是赤裸的交易、不負責任的交流以及......隱晦的交心。所有動作在此都微小而重要，因為他們將成為無法再與前一秒相同的，共同的記憶之作。
                  </div>
                  <div class="place">
                  時間：05.07 - 05.18｜10:00 - 20:00 <br/>
                  地點：第一活動中心 104展室
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
              <div class="introduce">
                <div class="title">啟憶</div>
                <div class="discription">
                  <div>現實跟記憶往往有著一線之隔，並不是隨時都有辦法輕易切換，可是在某些瞬間進入記憶卻是相當容易的，甚至是不可避免的陷入其中，因此，這個專案希望藉由透過聲音、影像來喚起記憶，可能是日常周遭的聲音，可能是一首熟悉的歌，可能是某些似曾相識的畫面，讓觀者能對進入記憶的瞬間產生共鳴，有更多不同的想法，再次開啟進入記憶廊道的開關。
                  </div>
                  <div class="place">
                  時間：05.07 - 05.11、05.14 - 05.18 <br/>
                  地點：社會科學院 1F大廳<br/>
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
        videoId: 'XWg8ZifVkcQ',
        bg: 'static/images/artproject_bien/bg.png',
        chi: 'static/images/artproject_yee/Image_76d5af1.jpg',
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
.bg
  width: 100%
  height: 100%
  @extend ._bcg-cover
.wrapper
  margin: 20px 0
  margin-bottom: 60px
.row
  margin: 0 2rem
  margin-left: 0
.hero
  height: 580px
  width: 100%
  @extend ._bcg-cover
.section
  max-width: 1024px
  margin: 10px auto
  // background: #fff
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
  margin: 40px 0
  background: #fff
  box-shadow: 0 5px 20px -5px rgba(50,50,93,.12), 0 3px 4px -2px rgba(0,0,0,.08)
  transition-duration: .15s
  &:hover
    box-shadow: 0 30px 75px -15px rgba(50,50,93,.3), 0 25px 40px -20px rgba(0,0,0,.1)
    transition-duration: .15s
  .introduce
    padding-top: 32px
  .project-img
    height: 420px
    width: 100%
    @extend ._bcg-cover
  .title
    font-size: 1.6em
    font-weight: 900
    text-align: left
    padding-bottom: 8px
    color: #4A7583
    letter-spacing: 2px
  .tag
    background: #4A7583
    color: #fff
    display: inline-block
    padding: 0.1em 1.4em
    margin-bottom: 12px
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
    .wrapper
      margin: 0 2rem
    .row
      margin: 0
    .introduce
      padding: 20px
    .hero
      height: 280px
    .project
      .project-img
        height: 300px
        margin-bottom: 10px
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
