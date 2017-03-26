<template>
  <section>
    <span class="card-row">
      <div v-for="s in classA">
        <div class="card class-a">
          <div class="container">
            <h1><b>{{ s.Name }}</b></h1>
            <i>{{ s.Detail }}</i>
          </div>
        </div>
      </div>
    </span>

    <span class="card-row">
      <div v-for="s in classB">
        <div class="card class-b">
          <img @click="handleOnClick(s)" :src="s.Logo[0].thumbnails.large.url" :alt="s.Logo[0].filename">
          <div class="container">
            <h5>{{ s.Name }}</h5>
            <!-- <i>{{ s.Detail }}</i> -->
          </div>
        </div>
      </div>
    </span>
  </section>
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
      console.log(this.active);
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
          console.error(err);
          return;
        }
        this.sponsors = item;
        // console.log('||||| Retrieved: ', this.sponsors);
      });
    },
  },
};
</script>

<style lang="css" scoped>
section{
  border: 1px pink dashed;
}

.active {
  border: red 1px solid;
}
</style>
