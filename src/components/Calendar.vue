<template>
  <section class="section">
    <transition name="fade">
      <div class="forcast" v-if="event">
        <div
          class="active-img"
          :style="{ 'background-image': 'url(' + bg + ')' }"
        >
        </div>
        <a v-if="link" :href="link" class="btn">前往報名</a>
        <div><h2>{{event}}</h2></div>
        <div v-if="place">地點 {{place}}</div>
        <div v-if="time">時間  {{time}}</div>
        <div v-if="intro">{{intro}}</div>
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
    title: '拾光隧道',
    start: '2018-05-04',
    cssClass: ['persian', 'bg'],
    time: '14:00-21:00',
    place: '圖資系館至活大前',
    intro: '表演卡司：臺大嘻哈文化研究社 / Tomboyz (北醫熱舞社) / 臺大流行音樂歌唱社 / 儀隊旗隊 / 林正 / 郭真榕 Candle Kuo x 光暈者 The Glows / 好樂團 / 告五人',
  },
  {
    title: 'Back in Time',
    start: '2018-05-04',
    cssClass: ['persian', 'bg'],
    time: '18:20-21:00',
    place: '振興草皮（遇雨改至怡仁堂）',
  },
  {
    title: 'Our days 憶常，微市集',
    start: '2018-05-25',
    cssClass: ['persian', 'bg'],
    time: '13:00-20:00',
    place: '活大前紅磚道',
  },
  {
    title: '時光迴廊',
    start: '2018-05-25',
    cssClass: ['persian', 'bg'],
    time: '12:00-21:00 5/26-27 9:00~21:00',
    place: '活大103展示室',
  },
  {
    title: 'The End of the Start (晚會)',
    start: '2018-05-25',
    cssClass: ['persian', 'bg'],
    time: '18:30-21:30',
    place: '活大103展示室',
  },
  {
    title: '反飾 | 互動式劇場',
    start: '2018-05-16',
    cssClass: ['persian', 'bg'],
    time: '19:00-21:00',
    place: '公館靈感咖啡 (106台北市大安區新生南路三段84-6號3F)',
    bg: 'static/images/academic/fanshih.jpg',
  },
  {
    title: '反飾 | 互動式劇場',
    start: '2018-05-17',
    cssClass: ['persian', 'bg'],
    time: '19:00-21:00',
    place: '公館靈感咖啡 (106台北市大安區新生南路三段84-6號3F)',
    bg: 'static/images/academic/fanshih.jpg',
  },
  {
    title: '反飾 | 互動式劇場',
    start: '2018-05-18',
    cssClass: ['persian', 'bg'],
    time: '19:00-21:00',
    place: '公館靈感咖啡 (106台北市大安區新生南路三段84-6號3F)',
    bg: 'static/images/academic/fanshih.jpg',
  },
  {
    title: '反飾 | 互動式劇場',
    start: '2018-05-19',
    cssClass: ['persian', 'bg'],
    time: '19:00-21:00',
    place: '公館靈感咖啡 (106台北市大安區新生南路三段84-6號3F)',
    bg: 'static/images/academic/fanshih.jpg',
  },
  {
    title: '反飾 | 互動式劇場',
    start: '2018-05-20',
    cssClass: ['persian', 'bg'],
    time: '19:00-21:00',
    place: '公館靈感咖啡 (106台北市大安區新生南路三段84-6號3F)',
    bg: 'static/images/academic/fanshih.jpg',
  },
  {
    title: '反飾 | 互動式劇場',
    start: '2018-05-23',
    cssClass: ['persian', 'bg'],
    time: '19:00-21:00',
    place: '公館靈感咖啡 (106台北市大安區新生南路三段84-6號3F)',
    bg: 'static/images/academic/fanshih.jpg',
  },
  {
    title: '反飾 | 互動式劇場',
    start: '2018-05-24',
    cssClass: ['persian', 'bg'],
    time: '19:00-21:00',
    place: '公館靈感咖啡 (106台北市大安區新生南路三段84-6號3F)',
    bg: 'static/images/academic/fanshih.jpg',
  },
  {
    title: '反飾 | 互動式劇場',
    start: '2018-05-25',
    cssClass: ['persian', 'bg'],
    time: '19:00-21:00',
    place: '公館靈感咖啡 (106台北市大安區新生南路三段84-6號3F)',
    bg: 'static/images/academic/fanshih.jpg',
  },
  {
    title: '觀 LOG IN | 實境劇場',
    place: '活大地下室',
    start: '2018-05-11',
    time: '18:30-21:30',
    cssClass: ['blue', 'bg'],
    bg: 'static/images/artproject_chang/login.png',
  },
  {
    title: '觀 LOG IN | 實境劇場',
    place: '活大地下室',
    start: '2018-05-12',
    time: '16:30-20:00',
    cssClass: ['blue', 'bg'],
    bg: 'static/images/artproject_chang/login.png',
  },
  {
    title: '觀 LOG IN | 實境劇場',
    place: '活大地下室',
    start: '2018-05-13',
    time: '16:30-20:00',
    cssClass: ['blue', 'bg'],
    bg: 'static/images/artproject_chang/login.png',
  },
  {
    title: '日日 | 現代舞蹈',
    place: '舊體2F桌球室',
    start: '2018-05-18',
    time: '18:30-19:30、20:30-21:30',
    cssClass: ['crete', 'bg'],
    bg: 'static/images/artproject_chang/sod.jpg',
  },
  {
    title: '日日 | 現代舞蹈',
    place: '舊體2F桌球室',
    start: '2018-05-19',
    time: '18:30-19:30、20:30-21:30',
    cssClass: ['crete', 'bg'],
    bg: 'static/images/artproject_chang/sod.jpg',
  },
  {
    title: '歧憶',
    place: '台大博雅館一樓圓桌區',
    start: '2018-05-12',
    time: '19:00-20:00',
    cssClass: ['orange', 'bg'],
  },
  {
    title: '歧憶',
    place: '台大博雅館一樓圓桌區',
    start: '2018-05-13',
    time: '15:00-16:00、19:00-20:00',
    cssClass: ['orange', 'bg'],
  },
  {
    title: '局外人',
    start: '2018-05-04',
    time: '10:00-13:00',
    cssClass: ['red', 'bg'],
  },
  {
    title: '・上線中 | 講座',
    place: '二活3樓 global lounge',
    start: '2018-05-08',
    time: '19:00-21:00',
    cssClass: ['darkgreen', 'bg'],
  },
  {
    title: '再構空間 | 講座',
    start: '2018-05-11',
    cssClass: ['green', 'bg'],
    time: '19:00-21:00',
    place: '活大202',
  },
  {
    title: '音樂電台',
    start: '2018-05-07',
    time: '12:30-13:00',
    cssClass: ['turmeric', 'bg'],
  },
  {
    title: '音樂電台',
    start: '2018-05-09',
    time: '12:30-13:00',
    cssClass: ['turmeric', 'bg'],
  },
  {
    title: '音樂電台',
    start: '2018-05-11',
    time: '12:30-13:00',
    cssClass: ['turmeric', 'bg'],
  },
  {
    title: '音樂電台',
    start: '2018-05-21',
    time: '12:30-13:00',
    cssClass: ['turmeric', 'bg'],
  },
  {
    title: '音樂電台',
    start: '2018-05-23',
    time: '12:30-13:00',
    cssClass: ['turmeric', 'bg'],
  },
  {
    title: '音樂電台',
    start: '2018-05-25',
    time: '12:30-13:00',
    cssClass: ['turmeric', 'bg'],
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
    title: '生存與生活 | 行為藝術者表演',
    start: '2018-05-12',
    time: '14: 30-15:00、15:30-16:00',
    cssClass: ['red', 'bg'],
  },
  {
    title: '生存與生活 | 行為藝術者表演',
    start: '2018-05-13',
    time: '14: 30-15:00、15:30-16:00',
    cssClass: ['red', 'bg'],
  },
  {
    title: '我與社會的連結 | 快閃',
    start: '2018-05-13',
    time: '14:00-18:10',
    place: '小福一樓廣場  雨天備案：活大一樓',
    cssClass: ['blue', 'bg'],
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
      intro: '',
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
      this.intro = event.intro;
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
  .persian
    color: #3922DD !important
  .crete
    color: #567A29 !important
  .turmeric
    color: #CFB94A !important
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
