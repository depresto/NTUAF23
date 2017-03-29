<template>
  <div>
    <navBar></navBar>
    <hero></hero>
    <department></department>
    <introduce></introduce>
    <event></event>
    <sponser></sponser>
    <foot></foot>
  </div>
</template>

<script>
import Sponser from '@/components/Sponser';
import Hero from '@/components/Hero';
import Department from '@/components/Department';
import Event from '@/components/Event';
import Introduce from '@/components/Introduce';
import Foot from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default {
  name: 'home-page',
  components: {
    Sponser,
    Hero,
    Department,
    Event,
    Foot,
    Introduce,
    NavBar,
  },
};
</script>

<style lang="css" scoped>

</style>
