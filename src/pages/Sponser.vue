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
        <div class="mt40 h3"> 合作夥伴 </div>
        <mu-row gutter class="card-row">
          <mu-col width="100" tablet="50" desktop="50" class="card class-d" v-for="s in classD" :key="s.id">
            <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
                <img class="img" @click="handleOnClick(s)" :src="s.Logo[0].thumbnails.large.url" :alt="s.Logo[0].filename">
                <a>{{ s.introduce }}</a>
            </a>
          </mu-col>
        </mu-row>
      </div>
    </div>
    <div class="wrapper">
      <div class="section">
        <div class="mt40 h3"> 媒體協力 </div>
        <mu-row gutter class="card-row">
          <mu-col width="100" tablet="25" desktop="25" class=" class-d" v-for="s in classC" :key="s.id">
            <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
                <img class="img_a" @click="handleOnClick(s)" :src="s.Logo[0].thumbnails.large.url" :alt="s.Logo[0].filename">
            </a>
          </mu-col>
        </mu-row>
      </div>
      <div class="section">
        <div class="mt40 h3"> 感謝贊助 </div>
        <mu-row gutter class="card-row">
          <mu-col width="100" tablet="25" desktop="25" class=" class-d" v-for="s in classA" :key="s.id">
            <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
                <img class="img_a" @click="handleOnClick(s)" :src="s.Logo[0].thumbnails.large.url" :alt="s.Logo[0].filename">
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
import { map, set } from 'lodash';
import Airtable from 'airtable';
import Foot from '@/components/Footer';
import NavBar from '@/components/NavBar';

const base = new Airtable({ apiKey: 'keyC0ndMttA3rW78D' }).base('appQBrZJS5RUN4WPl');

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
      backgroundImage: 'static/images/hero/hero.jpg',
    };
  },
  created() {
    this.syncAirtable();
  },

  computed: {
    classA() {
      return this.sponsors.filter(spnsor => spnsor.Class[1] !== 'class_D');
    },
    classD() {
      return this.sponsors.filter(spnsor => spnsor.Class[1] === 'class_D');
    },
    classC() {
      return this.sponsors.filter(spnsor => spnsor.Class[0] === 'class_C');
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
        this.sponsors = item;
        // console.log('||||| Retrieved: ', this.sponsors);
      });
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '../sass/settings'
  .wrapper
    // background: #E4EDEE
    padding: 40px 0
    margin: 40px 0
  .section
    max-width: 1280px
    margin: 10px auto
  .row
    margin: 0 2rem
  .hero
    height: 580px
    width: 100%
    @extend ._bcg-cover
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
    width: 200px
    position: absolute
    left: 0
    top: 0
  .img_a
    width: auto
    max-height: 120px
  .paperB
    padding: 20px 0
    margin: 10px 0
    text-align: left
</style>
