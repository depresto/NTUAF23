
<template>
  <transition appear name="fade">
    <div>
      <navBar></navBar>
      <div class="hero">
        <div class="svg_container">
          <svg viewBox="0 0 640 100">
            <!-- Symbol-->
            <symbol id="s-text">
              <text text-anchor="middle" x="50%" y="50%" dy=".2em">NEED hELP?</text>
            </symbol>
            <!-- Duplicate symbols-->
            <use class="text" xlink:href="#s-text"></use>
            <use class="text" xlink:href="#s-text"></use>
            <use class="text" xlink:href="#s-text"></use>
            <use class="text" xlink:href="#s-text"></use>
            <use class="text" xlink:href="#s-text"></use>
          </svg>
        </div>
        <div class="h2">購票、索票指南</div>
      </div>

<!--  sub_nav 開頭     -->
      <div class="nav">
        <li :class="{active:scrollPos == 0}">
         <a @click="$scrollTo(0)">藝術季售票活動一覽</a>
        </li>
        <li :class="{active:scrollPos == 1}">
         <a @click="$scrollTo(1)">藝術季索票活動一覽</a>
        </li>
        <div :class="{active:scrollPos == 2}">
           <a @click="$scrollTo(2)">演出當天驗票方式</a>
        </div>
        <div :class="{active:scrollPos == 3}">
           <a @click="$scrollTo(3)">退票與退款方式</a>
        </div>
        <div :class="{active:scrollPos == 4}">
          <a @click="$scrollTo(4)"> 索票頁面介紹</a>
        </div>
        <div :class="{active:scrollPos == 5}">
          <a @click="$scrollTo(5)"> 演出當天驗票方式</a>
        </div>
        <div :class="{active:scrollPos == 4}">
          <a @click="$scrollTo(4)">各種常見問題</a>
        </div>
      </div>
<!--  sub_nav 結束     -->
      <div v-scroll-spy="scrollPos" class="container">

        <div class="section">
          <div>
            <div class="title">售票活動</div>
            <p>所有售票活動開放線上購票至演出當天中午</p>
            <mu-row gutter class="project">
              <mu-col width="100" tablet="100" desktop="20">
                <div>劇場</div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="30">
                <div>
                  懼形｜羅拔 Paradise City｜
                </div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="40">
                <div>
                  05.07｜15：30<br/>
                  05.07｜19：30 <br/>
                  05.08｜19：30 <br/>
                  05.09｜19：30 <br/>
                  第一學生活動中心 B1文藝展示室<br/>
                </div>
              </mu-col>
            </mu-row>
            <mu-row gutter class="project">
              <mu-col width="100" tablet="100" desktop="20">
                <div>實境劇場</div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="30">
                <div>
                  變策展部｜妖易｜
                </div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="40">
                <div>
                  05.13｜16:30~19:30 <br/>
                  05.14｜16:30~19:30 <br/>
                  社科院 3F <br/>
                  學習開放空間 & 西側桌椅區 <br/>
                  05.20｜16:30~19:30 <br/>
                  05.21｜16:30~19:30 <br/>
                  第一學生活動中心 B1 文藝展示室<br/>
                </div>
              </mu-col>
            </mu-row>
            <mu-row gutter class="project">
              <mu-col width="100" tablet="100" desktop="20">
                <div>舞蹈劇場</div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="30">
                <div>
                  變策展部｜WHAT IF｜
                </div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="40">
                <div>
                  05.26｜19:30 - 20:30 <br/>
                  05.27｜14:30 - 15:30 <br/>
                  05.27｜19:30 - 20:30 <br/>
                  05.28｜14:30 - 15:30 <br/>
                  第一學生活動中心B1 文藝展示室<br/>
                </div>
              </mu-col>
            </mu-row>
          </div>
        </div>

        <div class="section">
          <div>
          <div class="title">索票活動</div>
          <mu-row gutter class="project">
            <mu-col width="100" tablet="100" desktop="20">
              <div>影展</div>
            </mu-col>
            <mu-col width="100" tablet="100" desktop="30">
              <div>
                學術策展部｜目集｜
              </div>
            </mu-col>
            <mu-col width="100" tablet="100" desktop="40">
              <div>
                05.08｜18：30  漢娜鄂蘭：真理無懼 <br/>
                05.09｜18：30  超級大國民<br/>
                05.10｜18：30  愛在波蘭戰火時<br/>
                05.11｜18：30  再見曼德拉<br/>
                05.12｜18：30  正義辯護人<br/>
                第一學生活動中心 104<br/>
              </div>
            </mu-col>
          </mu-row>
          <mu-row gutter class="project">
            <mu-col width="100" tablet="100" desktop="20">
              <div>現代舞蹈</div>
            </mu-col>
            <mu-col width="100" tablet="100" desktop="30">
              <div>
                制形｜現代舞蹈｜
              </div>
            </mu-col>
            <mu-col width="100" tablet="100" desktop="40">
              <div>
                05.14｜19：00<br/>
                05.14｜21：00<br/>
                臺大博雅教學館醉月湖側平台<br/>
              </div>
            </mu-col>
          </mu-row>
          <mu-row gutter class="project">
            <mu-col width="100" tablet="100" desktop="20">
              <div>耳機共感體驗 </div>
            </mu-col>
            <mu-col width="100" tablet="100" desktop="30">
              <div>
                探形｜耳機共感體驗｜
              </div>
            </mu-col>
            <mu-col width="100" tablet="100" desktop="40">
              <div>
                05.12｜19：30 - 20：00 <br/>
                05.19｜18：30 - 19：00 <br/>
                05.19｜19：30 - 20：00 <br/>
                05.26｜18：30 - 19：00 <br/>
                05.26｜19：30 - 20：00 <br/>
                華南銀行臺大分行<br/>
              </div>
            </mu-col>
          </mu-row>
          </div>
        </div>

        <div class="section">
            <div class="title">演出當天驗票方式</div>
            <div>於演出報到現場確認</div>
            <div>
            1.交易編號<br/>
            2.購票人姓名<br/>
            3.購票人手機號碼<br/>
            </div>
            <span>備註 : 藝術季方只認資訊，不認人。
            座位保留至演出開始後10分鐘，10分鐘後即開放現場補位購票，現場購票方式採現金購票。
            </span>
        </div>
        <div class="section">
            <div class="title">退票與退款方式</div>
            <p>*於演出活動前五天起不接受退票，亦即不提供退款。演出當天算一天。舉例 : 購買5/26號的表演，則最後可退款時間為5/21 23:59分。<br/>
            *交易手續費不予退回。
            <br/>
            備註 : 藝術季方只認資訊，不認人。
            </p>
            <mu-row gutter class="project">
              <mu-col width="100" tablet="100" desktop="20">
                <div>STEP 1 </div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="80">
                <div>
                私訊粉絲專頁告知退款需求，須提供:<br/>
                1.交易編號<br/>
                2.購票人姓名<br/>
                3.購票人手機號碼<br/>
                4.退票張數<br/>
                備註 : 藝術季方只認資訊，不認人。<br/>
                </div>
              </mu-col>
            </mu-row>
            <mu-row gutter class="project">
              <mu-col width="100" tablet="100" desktop="20">
                <div>STEP 2-1 </div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="80">
                <div>
                信用卡付款者直接會以售票平台退款，金流在當期或下一期帳單回收。
                </div>
              </mu-col>
            </mu-row>
            <mu-row gutter class="project">
              <mu-col width="100" tablet="100" desktop="20">
                <div>STEP 2-2 </div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="80">
                <div>
                虛擬ATM及超商付款者，請親自至臺大藝術季校門口小木屋資訊站簽收並領取現金退款，須提供 : <br/>
                1.交易編號 <br/>
                2.購票人姓名 <br/>
                3.購票人手機號碼 <br/>
                4.退票張數 <br/>
                </div>
              </mu-col>
            </mu-row>
        </div>
        <div class="section">
            <div class="title">索票頁面介紹</div>
            <mu-row gutter class="project">
              <mu-col width="100" tablet="100" desktop="20">
                <div>STEP 1 </div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="80">
                <div>
                點選活動頁售票連結
                </div>
              </mu-col>
            </mu-row>
            <mu-row gutter class="project">
              <mu-col width="100" tablet="100" desktop="20">
                <div>STEP 2 </div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="80">
                <div>
                點選欲參加之索票活動
                </div>
              </mu-col>
            </mu-row>
            <mu-row gutter class="project">
              <mu-col width="100" tablet="100" desktop="20">
                <div>STEP 3 </div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="80">
                <div>
                  點選商品簡介
                </div>
              </mu-col>
            </mu-row>
            <mu-row gutter class="project">
              <mu-col width="100" tablet="100" desktop="20">
                <div>STEP 4 </div>
              </mu-col>
              <mu-col width="100" tablet="100" desktop="80">
                <div>
                  點選索票連結
                </div>
              </mu-col>
            </mu-row>
        </div>
        <div class="section">
          <div class="title">我知道你還有問題 Q&A</div>
          <div>Q : 幫親朋好友買票是不是大家要同時間進場?</div>
          <div>A : 不需要同時進場，僅需要提供驗票資訊即可入場。</div>
          <div>Q : 我應該去哪裡才能購票才能享受到這些優質的表演?</div>
          <div>A : 前往購票</div>
          <div>Q : 詳細表演資訊在哪裡找?</div>
          <div>A : 臺大藝術季 >> 活動 >> 找到了</div>
        </div>
      </div>
      <foot></foot>
    </div>
  </transition>
</template>

<script>
import Foot from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default {
  name: 'QA',
  components: {
    Foot,
    NavBar,
  },
  extends: {
    data() {
      return {
        scrollPos: 0,
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

</script>

<style lang="sass" scoped>
  @import '../sass/settings'
  .project
    margin-bottom: 20px
    margin-top: 10px
    div
      text-align: left
  .hero
    background: #BBE4ED
    position: relative
    overflow: hidden
    &:before
      content: ' '
      position: absolute
      bottom: -800px
      right: 0
      width: 100%
      height: 50px
      border-bottom: 800px solid #F0DFCC
      border-right: 1000px solid #F0DFCC
      border-left: solid 800px transparent
      border-top: solid 800px transparent
      transform: rotate(30deg)
  .h2
    z-index: 2
    font-size: 1.5em
    color: #fff
    position: absolute
    bottom: 140px
    margin: 0 auto
    left: 0
    right: 0
  .svg_container
    width: 600px
    height: 400px
    position: relative
    margin: 0 auto
    // background: #E4EDEE
    font: 5em/1 Open Sans, Impact !important
  .nav
    margin: 20px 0
    li
      display: block
    a
      &:hover
       cursor: pointer
  .section
    max-width: 640px
    padding-top: 1.5em
    margin: 0 2em
  .title
    font-size: 1.6em
    margin-top: 1em
    line-height: 2em
  .container
    max-width: 640px
    margin: 0 auto
    margin-bottom: 100px
  svg
    position: absolute
    width: 680px
    margin: 0 auto
    left: 0
    right: 0
    top: 120px
  @media only screen and (max-width: 768px)
    .svg_container
      height: 280px
    svg
      width: 400px
      left: 0
      right: auto
      margin: auto
    .h2
      bottom: 80px
</style>

<style lang="scss" scoped>
@import url(http://fonts.googleapis.com/css?family=Open+Sans:800);
.text {
  fill: none;
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-dasharray: 70 330;
  stroke-dashoffset: 0;
  -webkit-animation: stroke 3s infinite linear;
  animation: stroke 6s infinite linear;
}
.text:nth-child(5n + 1) {
  stroke: #F0DFCC;
  -webkit-animation-delay: -1.2s;
  animation-delay: -1.2s;
}
.text:nth-child(5n + 2) {
  stroke: #F5A503;
  -webkit-animation-delay: -2.4s;
  animation-delay: -2.4s;
}
.text:nth-child(5n + 3) {
  stroke: #F0CCC7;
  -webkit-animation-delay: -3.6s;
  animation-delay: -3.6s;
}
.text:nth-child(5n + 4) {
  stroke: #56D9CD;
  -webkit-animation-delay: -4.8s;
  animation-delay: -4.8s;
}
.text:nth-child(5n + 5) {
  stroke: #F48786;
  -webkit-animation-delay: -6s;
  animation-delay: -6s;
}

@-webkit-keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}

</style>

