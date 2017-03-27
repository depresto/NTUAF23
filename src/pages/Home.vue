<template>
  <div>
    <hero></hero>
    <department></department>
    <sponser></sponser>
  </div>
</template>

<script>
import Sponser from '@/components/Sponser';
import Hero from '@/components/Hero';
import Department from '@/components/Department';
// import introduce from './components/introduce';

export default {
  name: 'home-page',
  components: {
    Sponser,
    Hero,
    Department,
    // introduce,
  },
};
</script>

<style lang="css" scoped>

</style>
