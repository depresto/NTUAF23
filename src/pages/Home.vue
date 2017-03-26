<template>
  <div>
<!--     <img src="./assets/logo.png"> -->
    <hero></hero>
    <sponser></sponser>
  </div>
</template>

<script>
import Sponser from '@/components/sponser';
import Hero from '@/components/hero';
// import introduce from './components/introduce';

export default {
  name: 'home-page',
  components: {
    Sponser,
    Hero,
    // introduce,
  },
};
</script>

<style>

</style>
