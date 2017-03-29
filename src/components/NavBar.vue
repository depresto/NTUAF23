<template>
  <section class="navBar">
    <div :class="{classA: scrollPosition < wh, classB: scrollPosition > wh}">
    <img class="logo" :src="logo" >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      wh: window.innerHeight,
      logoW: 'static/images/logo/logo-w.png',
      logoB: 'static/images/logo/logo-b.png',
      logo: 'static/images/logo/logo-w.png',
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.logo = this.logoW;
      if (this.scrollPosition > this.wh) {
        this.logo = this.logoB;
      } else {
        this.logo = this.logoW;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>

<style lang="sass" scoped>
  .classA
    color: red
  .classB
    color: black
  .navBar
    position: fixed
    top: 20px
    z-index: 100
    left: 2rem
  .logo
    width: 120px
</style>
