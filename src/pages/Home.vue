<template>
  <transition appear name="fade">
    <div>
      <div>
        <navBar></navBar>
        <hero></hero>
        <department></department>
<!--         <opening></opening> -->
        <introduce></introduce>
        <event></event>
        <activeMap></activeMap>
        <calendar></calendar>
        <sponser></sponser>
        <foot></foot>
      </div>
    </div>
  </transition>
</template>

<script>
// eslint-disable-next-line import/no-webpack-loader-syntax
// import Pace from 'imports-loader?define=>false!pace-progress';

import Sponser from '@/components/Sponser';
import Hero from '@/components/Hero';
import Department from '@/components/Department';
import Opening from '@/components/Opening';
import Event from '@/components/Event';
import Introduce from '@/components/Introduce';
import ActiveMap from '@/components/ActiveMap';
import Foot from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Calendar from '@/components/Calendar';

export default {
  name: 'home-page',
  components: {
    Sponser,
    Hero,
    Department,
    Opening,
    Event,
    Foot,
    Introduce,
    NavBar,
    ActiveMap,
    Calendar,
  },
};
</script>

<style lang="sass">
.hidden
  display: none
.show
  display: block
.animation
  width: 100px
  margin: 0 auto
  position: fixed
  left: 0
  right: 0
  top: 45%
</style>

