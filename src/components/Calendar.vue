<template>
  <section class="section">
    <div class="forcast" v-if="event">
      <div>{{event}}</div>
      <div>{{place}}</div>
      <div v-if="time">時間  {{time}}</div>
      <div @click="close">close</div>
    </div>
    <full-calendar :events="fcEvents" @eventClick="eventClick" locale="en" firstDay="1">
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
    start: '2017-05-01',
    cssClass: ['purple', 'bg'],
    time: '23:00-24:00',
  },
  {
    title: '公關 | 深夜電台',
    start: '2017-05-12',
    cssClass: ['purple', 'bg'],
    time: '23:00-24:00',
  },
  {
    title: '公關 | 深夜電台',
    start: '2017-05-19',
    cssClass: ['purple', 'bg'],
    time: '23:00-24:00',
  },
  {
    title: '公關 | 深夜電台',
    start: '2017-05-26',
    cssClass: ['purple', 'bg'],
    time: '23:00-24:00',
  },
  {
    title: '開幕式彩繪臺大Afterparty',
    place: '地點',
    start: '2017-05-02',
    cssClass: ['darkgreen', 'bg'],
  },
  {
    title: '相鬱 | 講座',
    start: '2017-05-08',
    end: '2017-05-08',
    cssClass: ['green', 'bg'],
    time: '18:30-21:30',
    place: '新生203',
  },
  {
    title: '目集 | 影展',
    start: '2017-05-08',
    end: '2017-05-12',
    cssClass: ['green', 'bg'],
    time: '19:00 - 21:00',
    place: '活大104',
  },
  {
    title: '羅拔 Paradise City',
    start: '2017-05-07',
    end: '2017-05-09',
    cssClass: ['orange', 'bg'],
    place: '活大B1',
    time: '19:00',
  },
  {
    title: '溯 | 校園導覽',
    start: '2017-05-10',
    cssClass: ['green', 'bg'],
  },
  {
    title: '溯 | 校園導覽',
    start: '2017-05-17',
    cssClass: ['green', 'bg'],
  },
  {
    title: '溯 | 校園導覽',
    start: '2017-05-24',
    cssClass: ['green', 'bg'],
  },
  {
    title: '溯 | 校園導覽',
    start: '2017-05-13',
    cssClass: ['green', 'bg'],
  },
  {
    title: '溯 | 校園導覽',
    start: '2017-05-20',
    cssClass: ['green', 'bg'],
  },
  {
    title: '溯 | 校園導覽',
    start: '2017-05-27',
    cssClass: ['green', 'bg'],
  },
  {
    title: '探形 | 耳機共感體驗',
    start: '2017-05-12',
    cssClass: ['orange', 'bg'],
    place: '華南',
    time: '日落後',
  },
  {
    title: '探形 | 耳機共感體驗',
    start: '2017-05-19',
    cssClass: ['orange', 'bg'],
    place: '華南',
    time: '日落後',
  },
  {
    title: '探形 | 耳機共感體驗',
    start: '2017-05-26',
    cssClass: ['orange', 'bg'],
    place: '華南',
    time: '日落後',
  },
  {
    title: '妖易',
    start: '2017-05-13',
    end: '2017-05-14',
    cssClass: ['blue', 'bg'],
    place: '社科3F',
    time: '16:30-19:30',
  },
  {
    title: '妖易',
    start: '2017-05-20',
    end: '2017-05-21',
    cssClass: ['blue', 'bg'],
    place: '社科3F',
    time: '16:30-19:30',
  },
  {
    title: '烏合行為藝術',
    start: '2017-05-15',
    end: '2017-05-19',
    cssClass: ['blue', 'bg'],
    place: '活大104',
    time: '12:30',
  },
  {
    title: '寶藏巖工作坊 x 身體日常計劃',
    start: '2017-05-18',
    cssClass: ['red', 'bg'],
    place: '活大104',
    time: '12:30',
  },
  {
    title: '寶藏巖工作坊 x 身體日常計劃',
    start: '2017-05-25',
    cssClass: ['red', 'bg'],
    place: '活大104',
    time: '12:30',
  },
  {
    title: '畫像 | 畫相',
    start: '2017-05-14',
    cssClass: ['blue', 'bg'],
    place: '二活3F',
    time: '13:00-15:00',
  },
  {
    title: '畫像 | 畫相',
    start: '2017-05-21',
    cssClass: ['blue', 'bg'],
    place: '二活3F',
    time: '13:00-15:00',
  },
  {
    title: '制形現代舞蹈',
    start: '2017-05-14',
    cssClass: ['orange', 'bg'],
    place: '博雅醉月湖側平台',
    time: '119:00、21:00',
  },
  {
    title: 'ㄧㄢˋ市集',
    start: '2017-05-21',
    cssClass: ['green', 'bg'],
  },
  {
    title: '宜蘭洄龜少年藝術季x漫遊創作計劃展期開始',
    start: '2017-05-24',
    cssClass: ['red', 'bg'],
  },
  {
    title: 'WHAT IF',
    start: '2017-05-26',
    end: '2017-05-28',
    cssClass: ['blue', 'bg'],
    place: '活大B1',
  },
];

export default {
  data() {
    return {
      fcEvents: demoEvents,
      event: '',
      place: '',
      time: '',
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
    },
    close() {
      this.event = null;
    },
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
    width: 200px
    height: 120px
    left: 0
    right: 0
    margin: 0 auto
    background: #E4EDEE
    z-index: 2
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
</style>
