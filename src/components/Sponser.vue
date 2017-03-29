<template>
  <div class="wrapper">
    <section>
      <h2>贊助夥伴</h2>
      <mu-row gutter class="card-row">
        <mu-col width="100" tablet="50" desktop="25" class="card class-a" v-for="s in classA">
          <a :href="s.Link" target="blank">
            <mu-paper class="paperA" :zDepth="1" >
              <div>{{ s.Detail }}</div>
              <img class="img" @click="handleOnClick(s)" :src="s.Logo[0].thumbnails.large.url" :alt="s.Logo[0].filename">
              <h1><b>{{ s.Name }}</b></h1>
            </mu-paper>
          </a>
        </mu-col width="100" tablet="50" desktop="33">
      </mu-row>

      <div class="mt40"> 感謝贊助 </div>

      <mu-row gutter class="card-row">
        <mu-col width="100" tablet="50" desktop="20" class="card class-a" v-for="s in classB">
          <a :href="s.Link" target="blank" class="paperB" :zDepth="1" >
          <img class="img" @click="handleOnClick(s)" :src="s.Logo[0].thumbnails.large.url" :alt="s.Logo[0].filename">
          </a>
        </mu-col width="100" tablet="50" desktop="33">
      </mu-row>
    </section>
  </div>
</template>

<script>
import { map, set } from 'lodash';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'keyC0ndMttA3rW78D' }).base('appQBrZJS5RUN4WPl');

export default {
  data() {
    return {
      sponsors: [],
      active: {},
    };
  },

  created() {
    this.syncAirtable();
  },

  computed: {
    classA() {
      return this.sponsors.filter(spnsor => spnsor.Class[0] === 'class_A');
    },
    classB() {
      return this.sponsors.filter(spnsor => spnsor.Class[0] === 'class_B');
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
  .row
    margin: 0 2rem
</style>


<style lang="css" scoped>
section{
  max-width: 1280px;
  margin:  100px auto;
}

.card{
  text-align: center;
}
.paperA {
  padding: 20px 0;
  margin: 10px 0;
  height: 240px;
  cursor: pointer;
}

.paperB {
  padding: 20px 0;
  margin: 10px 0;
  height: 180px;
  cursor: pointer;
}

.img {
  width: auto;
  max-height: 120px;
}

.mt40{
  margin-top: 40px;
}
</style>
