<template>
  <section>

    <span class="card-row">
      <div v-for="s in sponser">
        <div v-if="s.Class[0]=='class_A'">
          <div class="card" style="width:180px;">
            <div class="container">
              <h1><b>{{ s.Name }}</b></h1>
              <i>{{ s.Detail }}</i>
            </div>
          </div>
        </div>
      </div>
    </span>

    <span class="card-row">
      <div v-for="s in sponser">
        <div v-if="s.Class[0]=='class_B'">
          <div class="card">
            <img :src="s.Logo[0].thumbnails.large.url" :alt="s.Logo[0].filename" style="width:100%">
            <div class="container">
              <h5>{{ s.Name }}</h5>
              <!-- <i>{{ s.Detail }}</i> -->
            </div>
          </div>
        </div>
      </div>
    </span>

  </section>
</template>

<script>
// import { sponser } from '../service/airtable.js'
import _ from 'lodash';
import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'keyC0ndMttA3rW78D' }).base('appQBrZJS5RUN4WPl');

export default {
  data() {
    return {
      sponser: {
        classA: [],
        classB: [],
      },
    };
  },


  created() {
    this.syncAirtable();
  },

  methods: {
    syncAirtable() {
      console.log('||||| syncAirtable()...');
      const item = [];
      base('贊助商').select({
        // maxRecords: 100,
        view: 'Website view',
      }).eachPage((records, fetchNextPage) => {
        console.log(records);
        item.push(_.map(records, record => _.set(record.fields, 'id', record.id)));
        fetchNextPage();
      }, (err) => {
        if (err) {
          console.error(err);
          return;
        }
        this.sponser = item;
        console.log('||||| Retrieved: ', this.sponser);
      });
    },
  },
};
</script>

<style lang="css" scoped>
section{
  border: 1px pink dashed;
}

</style>
