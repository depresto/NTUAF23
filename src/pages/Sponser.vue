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
        <div class="mt40 h3"> 主要贊助 </div>
        <mu-row gutter class="card-row">
          <mu-col width="100" tablet="33" desktop="33" class=" class-d" v-for="s in class1" :key="s.id">
            <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
                <img class="img_a" @click="handleOnClick(s)" :src="s.logo" :alt="s.filename">
            </a>
          </mu-col>
        </mu-row>
      </div>
    </div>

    <div class="wrapper">
      <div class="section">
        <div class="mt40 h3"> 特別贊助 </div>
        <mu-row gutter class="card-row">
          <mu-col width="100" tablet="50" desktop="50" class=" class-d" v-for="s in class2" :key="s.id">
            <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
                <img class="img_a" @click="handleOnClick(s)" :src="s.logo" :alt="s.filename">
            </a>
            <mu-col width="100" v-if="s.text">{{s.text}}</mu-col>
          </mu-col>
        </mu-row>
      </div>
    </div>

    <div class="wrapper">
      <div class="section">
        <div class="mt40 h3"> 售票系統協力 </div>
        <mu-row gutter class="card-row">
          <mu-col width="100" tablet="100" desktop="100" class=" class-d" v-for="s in class7" :key="s.id">
            <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
                <img class="img_a" @click="handleOnClick(s)" :src="s.logo" :alt="s.filename">
            </a>
          </mu-col>
        </mu-row>
      </div>
    </div>

    <div class="wrapper">
      <div class="section">
        <div class="mt40 h3"> 網頁協力 </div>
        <mu-row gutter class="card-row">
          <mu-col width="100" tablet="100" desktop="100" class=" class-d" v-for="s in class6" :key="s.id">
            <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
                <img class="img_a" @click="handleOnClick(s)" :src="s.logo" :alt="s.filename">
            </a>
          </mu-col>
        </mu-row>
      </div>
    </div>

    <div class="wrapper">
      <div class="section">
        <div class="mt40 h3"> 媒體協力 </div>
        <mu-row gutter class="card-row">
          <mu-col width="100" tablet="33" desktop="33" class=" class-d" v-for="s in class8" :key="s.id">
            <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
                <img class="img_a" @click="handleOnClick(s)" :src="s.logo" :alt="s.filename">
            </a>
          </mu-col>
        </mu-row>
      </div>
    </div>

    <div class="wrapper">
      <div class="section">
        <div class="mt40 h3"> 電子設備贊助 </div>
        <mu-row gutter class="card-row">
          <mu-col width="100" tablet="100" desktop="100" class=" class-d" v-for="s in class3" :key="s.id">
            <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
                <img class="img_a" @click="handleOnClick(s)" :src="s.logo" :alt="s.filename">
            </a>
          </mu-col>
        </mu-row>
      </div>
    </div>

    <div class="wrapper">
      <div class="section">
        <div class="mt40 h3"> 藝術素材贊助 </div>
        <mu-row gutter class="card-row">
          <mu-col width="100" tablet="33" desktop="33" class=" class-d" v-for="s in class4" :key="s.id">
            <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
                <img class="img_a" @click="handleOnClick(s)" :src="s.logo" :alt="s.filename">
            </a>
          </mu-col>
        </mu-row>
      </div>
    </div>

    <div class="wrapper">
      <div class="section">
        <div class="mt40 h3"> 印刷協力 </div>
        <mu-row gutter class="card-row">
          <mu-col width="100" tablet="50" desktop="50" class=" class-d" v-for="s in class5" :key="s.id">
            <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
                <img class="img_a" @click="handleOnClick(s)" :src="s.logo" :alt="s.filename">
            </a>
          </mu-col>
        </mu-row>
      </div>
    </div>

    <div class="wrapper">
      <div class="section">
        <div class="mt40 h3"> 合作夥伴 </div>
        <mu-row gutter class="card-row">
          <mu-col width="100" tablet="25" desktop="25" class=" class-d" v-for="s in class9" :key="s.id">
            <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
                <img class="img_a" @click="handleOnClick(s)" :src="s.logo" :alt="s.filename">
            </a>
          </mu-col>
        </mu-row>
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
  name: 'sponser',
  components: {
    Event,
    Foot,
    NavBar,
  },
  data() {
    return {
      sponsors: [],
      active: {},
      backgroundImage: 'static/images/hero/header-web.jpg',
    };
  },

  computed: {
    class1() {
      return [{
        id: 'ntua',
        logo: 'static/images/sponser/1.主要贊助/財團法人國立台灣大學校友會文化基金會logo.jpg',
        filename: '財團法人國立台灣大學校友會文化基金會logo.jpg',
      }, {
        id: 'jkopay',
        logo: 'static/images/sponser/1.主要贊助/jkopay.jpg',
        filename: 'jkopay.jpg',
      }, {
        id: 'ntua',
        logo: 'static/images/sponser/1.主要贊助/麗陽logo.png',
        filename: '麗陽logo.png',
      }];
    },
    class2() {
      return [{
        id: 'hnbank',
        logo: 'static/images/sponser/2.特別贊助/02華南銀行.png',
        filename: '02華南銀行.png',
      }, {
        id: 'ntusystem',
        logo: 'static/images/sponser/2.特別贊助/臺大系統.jpg',
        filename: '臺大系統.jpg',
        show: true,
        text: '財團法人臺大系統文化基金會',
      }];
    },
    class3() {
      return [{
        id: 'acer',
        logo: 'static/images/sponser/3.電子設備贊助/acer.png',
        filename: 'acer',
      }];
    },
    class4() {
      return [{
        id: '富順纖維',
        logo: 'static/images/sponser/4.藝術素材贊助/10富順纖維.png',
        filename: '10富順纖維',
      }, {
        id: '五甸國際',
        logo: 'static/images/sponser/4.藝術素材贊助/18五甸國際.png',
        filename: '18五甸國際.png',
      }, {
        id: '立邦',
        logo: 'static/images/sponser/4.藝術素材贊助/立邦Log.png',
        filename: '立邦Log.png',
      }];
    },
    class5() {
      return [{
        id: 'Avocado',
        logo: 'static/images/sponser/5.印刷協力/A.jpg',
        filename: 'A.jpg',
      }, {
        id: '經典數位印刷',
        logo: 'static/images/sponser/5.印刷協力/經典數位印刷LOGO.png',
        filename: '經典數位印刷LOGO.png',
      }];
    },
    class6() {
      return [{
        id: '萊特曼工作室',
        logo: 'static/images/sponser/6.網頁協力/The Writingman.png',
        filename: 'The Writingman.png',
      }];
    },
    class7() {
      return [{
        id: '貝殼放大',
        logo: 'static/images/sponser/7.售票系統協力/03貝殼放大.png',
        filename: '03貝殼放大.png',
      }];
    },
    class8() {
      return [{
        id: '天地人文創',
        logo: 'static/images/sponser/8.媒體協力/天地人文創LOGO.jpg',
        filename: '天地人文創LOGO.jpg',
      }, {
        id: '蕃薯藤',
        logo: 'static/images/sponser/8.媒體協力/蕃薯藤.png',
        filename: '蕃薯藤.png',
      }, {
        id: '風傳媒',
        logo: 'static/images/sponser/8.媒體協力/風傳媒.png',
        filename: '風傳媒.png',
      }];
    },
    class9() {
      return [{
        id: '77',
        logo: 'static/images/sponser/9.合作夥伴/77 logo.png',
        filename: '77 logo.png',
      }, {
        id: '迷路的兔子',
        logo: 'static/images/sponser/9.合作夥伴/2018-02-17_10-10-16.jpg',
        filename: '2018-02-17_10-10-16.jpg',
      }, {
        id: 'waikiki',
        logo: 'static/images/sponser/9.合作夥伴/18893341_258905154587182_7791806651377152928_n.png',
        filename: '18893341_258905154587182_7791806651377152928_n.png',
      }, {
        id: 'Air walk',
        logo: 'static/images/sponser/9.合作夥伴/AIRWALK LOGO-02.jpg',
        filename: 'AIRWALK LOGO-02.jpg',
      }, {
        id: 'andyfamily',
        logo: 'static/images/sponser/9.合作夥伴/andyfamily.png',
        filename: 'andyfamily.png',
      }, {
        id: 'bonvivant',
        logo: 'static/images/sponser/9.合作夥伴/bonvivant.jpg',
        filename: 'bonvivant.jpg',
      }, {
        id: 'chord_major',
        logo: 'static/images/sponser/9.合作夥伴/chord_major.png',
        filename: 'chord_major.png',
      }, {
        id: 'city color',
        logo: 'static/images/sponser/9.合作夥伴/CITY COLOR-01.jpg',
        filename: 'CITY COLOR-01.jpg',
      }, {
        id: 'cupetit wedding',
        logo: 'static/images/sponser/9.合作夥伴/cupetit wedding.tif',
        filename: 'cupetit wedding.tif',
      }, {
        id: 'daman',
        logo: 'static/images/sponser/9.合作夥伴/daman-LOGO.jpg',
        filename: 'daman-LOGO.jpg',
      }, {
        id: 'EASTPAK_Contemporary',
        logo: 'static/images/sponser/9.合作夥伴/EASTPAK_Contemporary_Logo.jpg',
        filename: 'EASTPAK_Contemporary_Logo.jpg',
      }, {
        id: 'EVERLAST',
        logo: 'static/images/sponser/9.合作夥伴/EVERLAST LOGO-1-01.jpg',
        filename: 'EVERLAST LOGO-1-01.jpg',
      }, {
        id: 'I_m meme',
        logo: 'static/images/sponser/9.合作夥伴/I_m meme brand logo2.png',
        filename: 'I_m meme brand logo2.png',
      }, {
        id: 'KKBOX',
        logo: 'static/images/sponser/9.合作夥伴/KKBOX.PNG',
        filename: 'KKBOX.PNG',
      }, {
        id: 'butybox',
        logo: 'static/images/sponser/9.合作夥伴/logo_1111.jpg',
        filename: 'logo_1111.jpg',
      }, {
        id: 'D61',
        logo: 'static/images/sponser/9.合作夥伴/LOGO-黑.png',
        filename: 'LOGO-黑.png',
      }, {
        id: 'maktar',
        logo: 'static/images/sponser/9.合作夥伴/maktar_logo_h_yellow.jpg',
        filename: 'maktar_logo_h_yellow.jpg',
      }, {
        id: 'mr.hair',
        logo: 'static/images/sponser/9.合作夥伴/mr.hair.png',
        filename: 'mr.hair.png',
      }, {
        id: 'Qubii',
        logo: 'static/images/sponser/9.合作夥伴/Qubii_logoTM_中英.jpg',
        filename: 'Qubii_logoTM_中英.jpg',
      }, {
        id: 'sharktank',
        logo: 'static/images/sponser/9.合作夥伴/sharktanklogo_outlined.png',
        filename: 'sharktanklogo_outlined.png',
      }, {
        id: 'Somersby',
        logo: 'static/images/sponser/9.合作夥伴/Somersby_logo-彩.jpg',
        filename: 'Somersby_logo-彩.jpg',
      }, {
        id: 'SUDIO',
        logo: 'static/images/sponser/9.合作夥伴/SUDIO.png',
        filename: 'SUDIO.png',
      }, {
        id: 'Tsaio上山採藥',
        logo: 'static/images/sponser/9.合作夥伴/Tsaio上山採藥(原色).png',
        filename: 'Tsaio上山採藥(原色).png',
      }, {
        id: 'YOLO!',
        logo: 'static/images/sponser/9.合作夥伴/YOLO! LOGO_黑底白字.jpg',
        filename: 'YOLO! LOGO_黑底白字.jpg',
      }, {
        id: 'Bensimon',
        logo: 'static/images/sponser/9.合作夥伴/Bensimon.jpg',
        filename: 'Bensimon.jpg',
      }, {
        id: '大格酥',
        logo: 'static/images/sponser/9.合作夥伴/大格酥.png',
        filename: '大格酥.png',
      }, {
        id: '台灣艾爾',
        logo: 'static/images/sponser/9.合作夥伴/台灣艾爾LOGO_暗紅反白.jpg',
        filename: '台灣艾爾LOGO_暗紅反白.jpg',
      }, {
        id: '再創造',
        logo: 'static/images/sponser/9.合作夥伴/再創造.png',
        filename: '再創造.png',
      }, {
        id: '歪國零食嘴',
        logo: 'static/images/sponser/9.合作夥伴/歪國零食嘴_Logo-03.png',
        filename: '歪國零食嘴_Logo-03.png',
      }, {
        id: '晶碩光學',
        logo: 'static/images/sponser/9.合作夥伴/晶碩光學_中文.jpg',
        filename: '晶碩光學_中文.jpg',
      }, {
        id: '集點樹',
        logo: 'static/images/sponser/9.合作夥伴/集點樹.png',
        filename: '集點樹.png',
      }, {
        id: '歐印',
        logo: 'static/images/sponser/9.合作夥伴/歐印.jpg',
        filename: '歐印.jpg',
      }, {
        id: '湖池屋',
        logo: 'static/images/sponser/9.合作夥伴/雙品牌LOGO.png',
        filename: '雙品牌LOGO.png',
      }];
    },
  },

  methods: {
    handleOnClick({ Name }) {
      if (typeof this.active[Name] === 'undefined') {
        this.active[Name] = true;
      } else {
        this.active[Name] = !this.active[Name];
      }
      // console.log(this.active);
    },
    /*
    syncAirtable() {
      // console.log('||||| syncAirtable()...');
      let item = [];
      base('贊助商').select({
        // maxRecords: 100,
        view: 'Website view',
      }).eachPage((records, fetchNextPage) => {
        // console.log(records);
        item = item.concat(map(records, record => set(record.fields, 'id', record.id)));
        fetchNextPage();
      }, (err) => {
        if (err) {
          // console.error(err);
          return;
        }
        // this.sponsors = item;

        const len = item.length;

        item.splice(len - 1, 1);
        item.splice(len - 2, 1);
        this.sponsors = item;
        // console.log('||||| Retrieved: ', this.sponsors);
      });
    },
    */
  },
};
</script>

<style lang="sass" scoped>
  @import '../sass/settings'
  #app > div 
    background-color: #FFFCFD
  .wrapper
    // background: #E4EDEE
    padding: 20px 0
    margin: 20px 0
  .section
    max-width: 1280px
    margin: 10px auto
  .row
    margin: 0 2rem
  .hero
    height: 580px
    width: 100%
    @extend ._bcg-cover
    background-position-y: 60%
  .h2
    line-height: 2.4em
  .card
    position: relative
    height: 200px
    padding-left: 200px
    display: flex
    align-items: center
    justify-content: center
  .img
    width: 100%
    position: absolute
    left: 0
    top: 0
  .img_a
    width: auto;
    max-height: 170px;
    padding: 20px;
    max-width: 100%;
  .paperB
    padding: 20px 0
    margin: 10px 0
    text-align: left
</style>
