<template>
  <section class="section">
    <transition name="fade">
      <div class="forcast" v-if="event">
        <div
          class="active-img"
          :style="{ 'background-image': 'url(' + bg + ')' }"
        >
        </div>
        <a :href="link" class="btn">前往報名</a>
        <div><h2>{{event}}</h2></div>
        <div v-if="place">地點 {{place}}</div>
        <div v-if="time">時間  {{time}}</div>
        <div @click="close" class="close">x</div>
      </div>
    </transition>
    <full-calendar :events="fcEvents" @eventClick="eventClick"  @dayClick="dayClick" locale="en" firstDay="1">
   }
hhhh
  <template slot="fc-event-card" scope="p">
        <p><i class="fa">sadfsd</i> {{ p.event.title }}</p>
    </template>
    <div>hi</div>
    </full-calendar>
  </section>
</template>

<script>
import fullCalendar from 'vue-fullcalendar';

const demoEvents = [
  {
    title: '公關 | 深夜電台',
    start: '2017-05-04',
    cssClass: ['purple', 'bg'],
    time: '23:00-24:00',
    bg: 'static/images/song.jpg',
    link: 'https://www.facebook.com/events/1706423366316709/',
  },
  {
    title: '公關 | 深夜電台',
    start: '2017-05-12',
    cssClass: ['purple', 'bg'],
    time: '23:00-24:00',
    bg: 'static/images/song.jpg',
    link: 'https://www.facebook.com/events/1706423366316709/',
  },
  {
    title: '公關 | 深夜電台',
    start: '2017-05-19',
    cssClass: ['purple', 'bg'],
    time: '23:00-24:00',
    bg: 'static/images/song.jpg',
    link: 'https://www.facebook.com/events/1706423366316709/',
  },
  {
    title: '公關 | 深夜電台',
    start: '2017-05-25',
    cssClass: ['purple', 'bg'],
    time: '23:00-24:00',
    bg: 'static/images/song.jpg',
    link: 'https://www.facebook.com/events/1706423366316709/',
  },
  {
    title: '開幕式彩繪臺大Afterparty',
    place: '地點',
    start: '2017-05-05',
    cssClass: ['darkgreen', 'bg'],
    bg: 'static/images/opening.png',
  },
  {
    title: '相鬱 | 講座',
    start: '2017-05-08',
    end: '2017-05-08',
    cssClass: ['green', 'bg'],
    time: '18:30-21:30',
    place: '新生203',
    bg: 'static/images/academic/gloomy.jpg',
    link: 'https://ntuaf23.backme.tw/shops/515?checked=true&locale=zh-TW',
  },
  {
    title: '目集 | 影展',
    start: '2017-05-08',
    end: '2017-05-12',
    cssClass: ['green', 'bg'],
    time: '19:00 - 21:00',
    place: '活大104',
    bg: 'static/images/academic/see.png',
  },
  {
    title: '羅拔 Paradise City',
    start: '2017-05-07',
    end: '2017-05-09',
    cssClass: ['orange', 'bg'],
    place: '活大B1',
    time: '19:00',
    bg: 'static/images/artproject_xing/paradise.jpg',
  },
  {
    title: '溯 | 校園導覽',
    start: '2017-05-10',
    cssClass: ['green', 'bg'],
    bg: 'static/images/academic/retro.png',
    place: '博雅草坪、文學院前、社科草坪、陳文成廣場',
    time: '10:00 - 10:40、13:00 - 13:40 ',
    link: 'https://goo.gl/KgEsBx',
  },
  {
    title: '溯 | 校園導覽',
    start: '2017-05-17',
    cssClass: ['green', 'bg'],
    bg: 'static/images/academic/retro.png',
    place: '博雅草坪、文學院前、社科草坪、陳文成廣場',
    time: '10:00 - 10:40、13:00 - 13:40 ',
    link: 'https://goo.gl/KgEsBx',
  },
  {
    title: '溯 | 校園導覽',
    start: '2017-05-24',
    cssClass: ['green', 'bg'],
    bg: 'static/images/academic/retro.png',
    place: '博雅草坪、文學院前、社科草坪、陳文成廣場',
    time: '10:00 - 10:40、13:00 - 13:40 ',
    link: 'https://goo.gl/KgEsBx',
  },
  // {
  //   title: '溯 | 校園導覽',
  //   start: '2017-05-13',
  //   cssClass: ['green', 'bg'],
  //   bg: 'static/images/academic/retro.png',
  // },
  // {
  //   title: '溯 | 校園導覽',
  //   start: '2017-05-20',
  //   cssClass: ['green', 'bg'],
  //   bg: 'static/images/academic/retro.png',
  // },
  // {
  //   title: '溯 | 校園導覽',
  //   start: '2017-05-27',
  //   cssClass: ['green', 'bg'],
  //   bg: 'static/images/academic/retro.png',
  // },
  {
    title: '探形 | 耳機共感體驗',
    start: '2017-05-12',
    cssClass: ['orange', 'bg'],
    place: '華南',
    time: '日落後',
    bg: 'static/images/artproject_xing/headset.jpg',
  },
  {
    title: '探形 | 耳機共感體驗',
    start: '2017-05-19',
    cssClass: ['orange', 'bg'],
    place: '華南',
    time: '日落後',
    bg: 'static/images/artproject_xing/headset.jpg',
  },
  {
    title: '探形 | 耳機共感體驗',
    start: '2017-05-26',
    cssClass: ['orange', 'bg'],
    place: '華南',
    time: '日落後',
    bg: 'static/images/artproject_xing/headset.jpg',
  },
  {
    title: '妖易',
    start: '2017-05-13',
    end: '2017-05-14',
    cssClass: ['blue', 'bg'],
    place: '社科3F',
    time: '16:30-19:30',
    bg: 'static/images/artproject_bien/demon.jpg',
  },
  {
    title: '妖易',
    start: '2017-05-20',
    end: '2017-05-21',
    cssClass: ['blue', 'bg'],
    place: '活大B1',
    time: '16:30-19:30',
    bg: 'static/images/artproject_bien/demon.jpg',
  },
  {
    title: '烏合行為藝術',
    start: '2017-05-15',
    end: '2017-05-19',
    cssClass: ['blue', 'bg'],
    place: '活大104',
    time: '12:30',
    bg: 'static/images/artproject_bien/crow.png',
  },
  {
    title: '寶藏巖工作坊 x 身體日常計劃',
    start: '2017-05-18',
    cssClass: ['red', 'bg'],
    place: '活大104',
    time: '12:30',
    bg: 'static/images/academic/retro.png',
  },
  {
    title: '寶藏巖工作坊 x 身體日常計劃',
    start: '2017-05-25',
    cssClass: ['red', 'bg'],
    place: '活大104',
    time: '12:30',
    bg: 'static/images/academic/retro.png',
  },
  {
    title: '畫像 | 畫相',
    start: '2017-05-14',
    cssClass: ['blue', 'bg'],
    place: '二活3F',
    time: '13:00-15:00',
    bg: 'static/images/artproject_bien/portrait.png',
  },
  {
    title: '畫像 | 畫相',
    start: '2017-05-21',
    cssClass: ['blue', 'bg'],
    place: '二活3F',
    time: '13:00-15:00',
    bg: 'static/images/artproject_bien/portrait.png',
  },
  {
    title: '制形現代舞蹈',
    start: '2017-05-14',
    cssClass: ['orange', 'bg'],
    place: '博雅醉月湖側平台',
    time: '119:00、21:00',
    bg: 'static/images/artproject_xing/dance.png',
    link: 'https://www.facebook.com/events/1354841114597907/',
  },
  {
    title: 'ㄧㄢˋ市集',
    start: '2017-05-21',
    cssClass: ['green', 'bg'],
    bg: 'static/images/academic/retro.png',
  },
  {
    title: '宜蘭洄龜少年藝術季x漫遊創作計劃展期開始',
    start: '2017-05-24',
    cssClass: ['red', 'bg'],
    bg: 'static/images/academic/retro.png',
  },
  {
    title: 'WHAT IF',
    start: '2017-05-26',
    end: '2017-05-28',
    cssClass: ['blue', 'bg'],
    place: '活大B1',
    bg: 'static/images/artproject_bien/whatif.png',
  },
];

function preloaderBg(img) {
  return `url(${img}) no-repeat -9999px -9999px`;
}

export default {
  created() {
    const dom = document.createElement('div');
    const background = demoEvents.map(evt => preloaderBg(evt.bg)).join(',');
    dom.style.background = background;

    document.body.appendChild(dom);
  },
  data() {
    return {
      fcEvents: demoEvents,
      event: '',
      place: '',
      time: '',
      bg: '',
      link: '',
    };
  },
  extends: {
    components: {
      fullCalendar,
    },
  },
  methods: {
    eventClick(event) {
      this.event = event.title;
      this.place = event.place;
      this.time = event.time;
      this.bg = event.bg;
      this.link = event.link;
    },
    dayClick() {
      this.event = '';
    },
    close() {
      this.event = null;
    },
    // esc() {
    //   if (event.key === 'Enter') {
    //     console.log('enter key was pressed!');
    //   }
    // },
  },
};
</script>


<style lang="sass" scoped>

  @import '../sass/settings'
  .section
    // height: 600px
    width: 100%
    margin-top: 60px
    position: relative
  .forcast
    position: absolute
    top: 40%
    width: 400px
    height: 240px
    left: 0
    right: 0
    margin: 0 auto
    background: #E4EDEE
    z-index: 3
    text-align: left
    padding: 20px
    padding-left: 180px
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.18)
  .active-img
    @extend ._bcg-cover
    width: 140px
    height: 140px
    position: absolute
    left: 20px
    top: 20px
  .btn
    background: #fff
    padding: 0.4em 0.5em
    display: inline-block
    position: absolute
    bottom: 30px
    left: 30px
    width: 120px
    text-align: center
    cursor: pointer
  .close
    position: absolute
    top: 5px
    right: 10px
    cursor: pointer
  .fade-enter-active, .fade-leave-active
    transition: opacity .3s

  .fade-enter, .fade-leave-to
    opacity: 0
  @media only screen and (max-width: 768px)
    .forcast
      width: 320px
</style>

<style lang="sass" >

  @import '../sass/settings'
  .bg
    background-color: #E4EDEE !important
  .purple
    color: #A40D5E !important

  .darkgreen
    color: #00A29A !important

  .orange
    color: #F39800 !important

  .green
    color: #15AE67 !important
  .blue
    color: #056FB8 !important
  .red
    color: #C30F23 !important
  .comp-full-calendar
    max-width: 1280px !important
  .more-events
    z-index: 2 !important
  .full-calendar-body
    .dates
      .more-events
        .more-body
          background: #fff
</style>
