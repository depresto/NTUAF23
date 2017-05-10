<template>
  <transition appear name="fade">
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
          <div class="title">形策展｜理念介紹</div>
          <div>科技帶領世界漸漸地改變，將人們的深信不疑轉換為下一個迷思；驀然回首，世界早已不是當初的模樣。</div>
          <div>《形》刺激人類做夢與想望的能力，於台大校園的平行世界中，劃分虛構的極端聚落，猶如科技變形的實驗場，展開未來世界的可能維度。人性在〈懼形〉泯滅、在〈制形〉消長、在〈探形〉超越。這是一場架空思想而置身其境的旅程，從多元媒介透析觀者的自身常識與科技認知，在不同層次挑戰價值體系並批判運作本質，藉以反思當代科技走向，形塑個人－社會複合體（Individual-Social Complex）的另類（alternative）想像。</div>
        </div>
        <div class="project-list">
          <mu-row gutter>
            <mu-col width="100" tablet="50" desktop="100">
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
                  世界入口
                  </a>
                </li>
                <li :class="{active:scrollPos == 1}">
                 <a @click="$scrollTo(1)">
                  制形
                 </a>
                </li>
                <li :class="{active:scrollPos == 2}">
                  <a @click="$scrollTo(2)">
                  懼形
                  </a>
                </li>
                <li :class="{active:scrollPos == 3}">
                  <a @click="$scrollTo(3)">
                 探形
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
                <div class="title">世界入口</div>
                <div class="discription">
                  <div>結構形變．重組可能</div>
                  <br/>
                  <div>
                 「我們對於世界的理解，就猶如呼吸吐納般的自然。」
                  </div>
                   <div>〈世界入口〉所要提供的，並非是如蟲洞（Wormhole）的時空穿越感，而是在觀看的過程中釋義多元價值並存的豐富態樣。透過結構的不斷翻轉，產生層次上裂解與重組的語彙，同時間衝擊僵化的當今世界。藉由建立起塑造、拆解與還原的循環疊合，引領觀者在潛意識內探索超越現在時空的可能性，作為「變形」的藝術實踐。</div>
                  <div class="place">
                  05.08 - 05.26｜10：00 - 18：00 臺大社會科學院介宙館穿堂<br/>
                  </div>
<!--                   <a class="more" href="https://medium.com/ntuartfest/acad-gender/home">
                    more
                  </a> -->
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
                <div class="title">制形</div>
                <div class="discription">
                  <div>數據制約．自由瓦解</div>
                  <br/>
                  <div>
                數據所形成的社會秩序，如同程式碼般精準運行。一舉一動受到演算法監控，是最佳化的理想，亦或是自由選擇的終結？科技帶來的權力流動與物質上的富足，使人盲目渴望掌握，進而反噬人類最根本的能動性。〈制形〉的創作藉由顛覆對既有秩序的想像，探討科技與人類相互牽制的內在關係。
                  </div>
                  <div class="place">
                  ｜現代舞蹈｜<br/>
                  現代舞蹈《制形》以開放式舞台解放群眾，帶領您一同體驗資訊新秩序下的運算重啟。<br/>
                  展期：05.14｜19：00、21：00  <br/>
                  地點：臺大博雅教學館醉月湖側平台
                  <div>
                    <a class="more" href="https://medium.com/ntuartfest/acad-gender/home">
                      前往報名
                    </a>
                  </div>
                  <br/>
                  ｜互動裝置藝術｜<br/>
                  展期：05.15 - 05.26｜09：00 - 17：00 <br/>
                  地點：臺大博雅教學館101教室外
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
                <div class="title">懼形</div>
                <div class="discription">
                  <div>科技崇拜．恐懼懷疑</div>
                  <br/>
                  <div>
                 科技取代人類成為了世界的支配者，而人類成為大自然中緩慢演化的落後產物。當科技成為唯一的救贖，退化後的我們，只能用力膜拜、虔誠信仰，祈求「祂」能夠繼續用不自然的色光控制那早已無所謂的自身感覺與意識。
〈懼形〉以宗教的形式，藉由劇場及裝置，將科技形塑為總體意志的延伸，直往心中對於個體價值的質疑與恐懼。
                  </div>
                  <div class="place">
                  ｜劇場。羅拔 Paradise City｜<br/>
                  展期：
05.07｜15：00、19：00
05.08｜19：00
05.09｜19：00<br/>
                  <div>
                    <a class="more" href="https://medium.com/ntuartfest/acad-gender/home">
                      前往報名
                    </a>
                  <br/>
                  </div>
                  地點：第一學生活動中心 B1文藝展示室<br/>
                  ｜裝置藝術｜<br/>
                  展期：05.08 - 05.26｜10：00 - 18：00<br/>
                  地點：第一學生活動中心 103
                  </div>
<!--                   <a class="more" href="https://medium.com/ntuartfest/acad-gender/home">
                    more
                  </a> -->
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
              :style="{ 'background-image': 'url(' + cyborg + ')' }"
              >
              </div>
            </mu-col>
            <mu-col width="100" tablet="50" desktop="50">
              <div>
                <div class="title">探形</div>
                <div class="discription">
                  <div>
                  人類和機械之間的界線日益模糊；科技化後的軀體形成「賽伯格人」 (Cyborg)，感官大幅擴增，改變了我們感知世界的方式，自由選擇與機械結合與否的同時，亦重新選擇雙目所見、雙耳所聞。屆時，何謂真實？又或者無所謂真實？
                  </div>
                  <div>
                  我們將如何生活？在重新定義環境之際，是不是也將重新定義自己？每個人心中自有一套世界運作的系統，有些相容並存，有些矛盾互斥，人類破碎成遊牧群體。過去天擇演化決定了物種的分支，這一次是人擇進化，個體之間從此形態各異。
                  </div>
                  <div class="place">
                  ｜互動裝置藝術｜<br/>
                  眼前景物經過扭曲、加工、再製，才被人們接收，世界遭科技重置，見亦非見。我們曾經說的「眼見為憑」還適用嗎？我們以科技的角度重新凝視這個世界，在感覺與認知之間的巨大落差下，提供觀者感知體驗的無限可能。<br/>
                  時間：05.08 - 05.26｜10：00 - 18：00 <br/>
                  地點：華南銀行臺大分行
                  </div>
                  <div class="place">
                  ｜耳機共感體驗｜<br/>
                  「人類是否能有超乎語言、文字的溝通可能？」
賽伯格人推翻文字或言語的交流，訊息與的交流將透過樂音完成。聲音串連人們的感官，感覺本體在纜線之中流竄擴散，生理脈動於震動之間感應回饋。耳機共感體驗讓聽者群聚連線空間，體驗共同想像建構的廣大感官世界。<br/>
                  時間：05.12、05.19、05.26｜18:30 - 19：00、19：30 - 20：00 <br/>
                  地點：華南銀行臺大分行
                  </div>
                    <div>
                    <a class="more" href="https://medium.com/ntuartfest/acad-gender/home">
                      前往報名
                    </a>
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
