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
          <div class="bg" v-bind:style="{ backgroundImage: 'url(' + s.imgUrl + ')' }">
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
      <a class="more_btn" href="/ticket">查看所有活動</a>
    </div>
    </mu-row>
  </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [{
        Date: '5',
        Time: '16-25',
        Detail: '地點：公館靈感咖啡 | 一場10人 | 票價:180元',
        Name: '反飾',
        imgUrl: 'static/images/academic/fanshih.jpg',
      },
      {
        Date: '5',
        Time: '11-13',
        Detail: '地點：活大地下室 | 一場20人 共三場 | 票價:200元',
        Name: '觀 LOG IN',
        imgUrl: 'static/images/artproject_chang/login.png',
      },
      {
        Date: '5',
        Time: '18-19',
        Detail: '地點：舊體2F桌球室 | 一場10-15人 共四場 | 票價:免費入場，但需先在平台預約',
        Name: '日日',
        imgUrl: 'static/images/artproject_chang/sod.jpg',
      },
      {
        Date: '5',
        Time: '12-13',
        Detail: '地點：台大博雅館一樓圓桌區 | 一場上限80人 共3場 | 票價:免費入場，但需先在平台預約',
        Name: '歧憶',
        imgUrl: 'static/images/artproject_yee/歧憶正方.jpg',
      }],
      active: {},
      backgroundImage: 'static/images/home/active_g.png',
    };
  },
};
</script>

<style lang="sass" scoped>
  @import '../sass/settings'
  .wrapper
    background: #FFFDFE
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
  background: #693F49;
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
  background: #693F49;
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
  color: #693F49;
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
