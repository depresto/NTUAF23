<template>
  <div class="wrapper">
  <section>
    <h2> 熱門活動 </h2>
    <mu-row gutter class="card-row row">
      <mu-col width="100" tablet="50" desktop="50" class="card class-a" v-for="s in events" :key="s.id">
        <a class="card" href="https://ntuaf23.backme.tw/shops/515">
          <div class="time">
            <div class="time_date">{{ s.Date }}</div>
            <div class="time_time">{{ s.Time }}</div>
          </div>
          <div class="bg" v-bind:style="{ backgroundImage: 'url(' + s.Img[0].thumbnails.large.url + ')' }">
            <div class="detail">{{ s.Detail }}</div>
          </div>
          <div class="name">{{ s.Name }}</div>
          <a href="https://ntuaf23.backme.tw/shops/515" class="btn">前往報名</a>
        </a>
      </mu-col>
    <div
      class="more"
      :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
    >
      <a class="more_btn" href="https://ntuaf23.backme.tw/shops/515">查看所有活動</a>
    </div>
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
      events: [],
      active: {},
      backgroundImage: 'static/images/home/active_g.png',
    };
  },

  created() {
    this.syncAirtable();
  },

  computed: {
    events() {
      return this.events;
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
      base('活動').select({
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
        this.events = item;
        // console.log('||||| Retrieved: ', this.events);
      });
    },
  },
};
</script>

<style lang="sass" scoped>
  @import '../sass/settings'
  .wrapper
    background: #E4EDEE
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

.card {
  text-align: left;
  position: relative;
  margin-bottom: 1em;
  display: block;
}

.time {
  width: 6em;
  height: 6em;
  background: #4A7583;
  position: absolute;
  top: 1.5em;
  left:  1.5em;
  color: #fff;
  z-index: 1;
}

.time_date {
  font-size: 1.6em;
  text-align: center;
  padding-top: 0.7em;
}

.time_time {
  font-size: 0.9em;
  text-align: center;
}

.bg{
  width: 100%;
  height:  280px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  position: relative;
  overflow: hidden;
}

.detail {
  position: absolute;
  padding: .5em 1.5em;
  bottom: 0;
  opacity: 0;
  transition: 0.4s;
}

.card:hover > .bg > .detail {
  opacity: 1;
  background: rgba(0,0,0,0.3);
  color: #fff;
  transition: 0.4s;
}

.card:hover > .btn {
  box-shadow: 0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647);
}

.name {
  background: #4A7583;
  height: 4em;
  line-height: 4em;
  font-size: 1.2em;
  padding-left: 1.5em;
  color: #fff;
}

.btn {
  position: absolute;
  right: 1.5em;
  bottom: 3.5em;
  line-height: 2.6em;
  background: #fff;
  width: 6.5em;
  text-align: center;
  color: #4A7583;
  transition: 0.4s;
}

.more {
  height: 120px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  text-align: center;
  padding-top: 30px;
}

.more_btn {
  background: #fff;
  padding: 8px 2em;
  display: inline;
  line-height: 2.6em;
  text-align: center;
  color: #4A7583;
  margin: 0 auto;
  transition: 0.4s;
}

.more:hover > .more_btn {
  box-shadow: 0 2px 6px rgba(0,0,0,.117647), 0 2px 4px rgba(0,0,0,.117647);
}
</style>

<style lang="sass" scoped>
@media only screen and (max-width: 768px)
  .bg
    height: 220px
</style>
