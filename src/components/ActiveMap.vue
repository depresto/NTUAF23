<template>
  <section class="section">
    <h2 class="h2">活動地圖</h2>
    <div class="section_map">
      <img class="map" :src="map" >
      <div @mouseover='filter = "第一學生活動中心" ' class="mark1">
        <MapMarker fill="#F39800"></MapMarker>
      </div>

      <div @mouseover='filter = "第二學生活動中心" ' class="mark2">
        <MapMarker fill="#E61773"></MapMarker>
      </div>

      <div @mouseover='filter = "臺大校門"' class="mark3">
        <MapMarker></MapMarker>
      </div>

      <div @mouseover='filter = "鹿鳴廣場"' class="mark4">
        <MapMarker fill="#E60013"></MapMarker>
      </div>

      <div @mouseover='filter = "博雅教學館"' class="mark5">
        <MapMarker fill="#6A3A07"></MapMarker>
      </div>
      <div @mouseover='filter = "社科院"' class="mark6">
        <MapMarker  fill="#601986"></MapMarker>
      </div>

      <div @mouseover='filter = "霖澤館"' class="mark7">
        <MapMarker fill="#595857"></MapMarker>
      </div>

      <div @mouseover='filter = "華南銀行臺大分行"' class="mark8">
        <MapMarker fill="#F6C1D8"></MapMarker>
      </div>

      <div @mouseover='filter = "校史館"' class="mark9">
        <MapMarker fill="#056FB8"></MapMarker>
      </div>

      <div @mouseover='filter = "醉月湖"' class="mark10">
        <MapMarker fill="#181D62"></MapMarker>
      </div>

    </div>
    <div class="information">
      <div
        v-bind:style="{ color: now_area[0].color }"
        class="place"
      >
        {{now_area[0].place}}
      </div>
      <div v-for="item in now_area[0].actives" class="p">
        <div>{{ item.active}}</div>
      </div>
    </div>
  </section>
</template>

<script>
import MapMarker from '@/components/MapMarker';
import placeData from '../data/placeData';

export default {
  components: {
    MapMarker,
  },
  data() {
    return {
      map: 'static/images/home/map.png',
      place: placeData,
      filter: '',
    };
  },
  computed: {
    now_area() {
      return this.place.filter(obj => obj.place === this.filter);
    },
  },
};
</script>


<style scoped lang="sass">
.h2
  position: absolute
  color: #fff
  top: 20px
  left: 0
  right: 0
  margin 0 auto

.section
  height: 720px
  width: 100%
  background: #6A8B9C
  display: flex
  align-items: center
  justify-content: center
  position: relative
.section_map
  width: 600px
  position: relative
  height: 540px
  margin-top: 20px
.map
  width: 600px
  position: relative
  height: 540px
.marker
  transition: .2s
  opacity: 0.8
  &:hover
    transform: scale(1.3)
  .svg-fill-1
    fill: #F39800
  .svg-fill-2
    fill: #E61773
.information
  width: 300px
  position: absolute
  top: 60%
  color: #fff
  right: 13%
  text-align: left
.place
  font-size: 1.5em
</style>

<style lang="sass">
.marker
  transition: .2s
  opacity: 0.8
  width: 22px
  height: 30px
  &:hover
    transform: scale(1.3)
.mark1
  position: absolute
  top: 36%
  left: 52%
.mark2
  position: absolute
  top: 60%
  left: 30%
.mark3
  position: absolute
  top: 40%
  left: 20%
.mark4
  position: absolute
  top: 55%
  left: 40%
.mark5
  position: absolute
  top: 27%
  left: 36%
.mark6
  position: absolute
  top: 17%
  left: 66%
.mark7
  position: absolute
  top: 18%
  left: 73%
.mark8
  position: absolute
  top: 60%
  left: 48%
.mark9
  position: absolute
  top: 36%
  left: 26%
.mark10
  position: absolute
  top: 18%
  left: 36%

@media only screen and (max-width: 768px)
  .marker
    transition: .2s
    opacity: 0.8
    width: 10px
    height: 14px
    &:hover
      transform: scale(1.5)

</style>
<style lang="sass" scoped>
@media only screen and (max-width: 768px)
  .section
    display: block
    height: 580px
  .section_map
    width: 300px
    height: 270px
    margin: 20px auto
  .h2
    display: block
    position: relative
    font-size: 1.35em
    padding-bottom: 1em
  .map
    width: 300px
    height: 270px
    margin: 0 auto
  svg
    width: 18px
    height: 22px

  .information
    width: 100%
    position:relative
    top: auto
    color: #fff
    right: auto
    text-align: center
    display: block
    margin: 0 auto
  .place
    font-size: 1.2em
  .p
    font-size: 0.8em
    line-height: 1.2em
</style>

