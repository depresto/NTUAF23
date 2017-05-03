<template>
  <section class="nav">
    <div
      class="nav"
      :class="{isNormal: scrollPosition < wh-20, isScroll: scrollPosition > wh-20}"
    >

      <router-link to="/">
        <img class="logo" :src="logo" >
      </router-link>
      <div
        class="list"
        v-if="ww > mobileWidth"
      >
        <router-link to="artproject_bien">變策展部</router-link>
        <router-link to="artproject_xing">形策展部</router-link>
        <router-link to="academic">學術策展部</router-link>
        <router-link to="sponser">合作夥伴</router-link>
        <a href="https://medium.com/ntuartfest">medium文章</a>
        <a href="https://ntuaf23.backme.tw/shops/515?checked=true&locale=zh-TW">活動購票</a>
      </div>

      <div
        class="toggle_menu"
        :class="{toggle_menu_line: menuStateOpen === false, toggle_menu_cross: menuStateOpen}"
        v-if="ww < mobileWidth"
        v-on:click="handleToggleMenu"
      >
        <span class="gnav--1"></span>
        <span class="gnav--2"></span>
        <span class="gnav--3"></span>
      </div>
      <div
        class="menu"
        v-if="menuStateOpen && ww < mobileWidth"
      >
        <router-link to="artproject_bien">變策展部</router-link>
        <router-link to="artproject_xing">形策展部</router-link>
        <router-link to="academic">學術策展部</router-link>
        <router-link to="sponser">合作夥伴</router-link>
        <a href="https://medium.com/ntuartfest">medium文章</a>
        <a href="https://ntuaf23.backme.tw/shops/515?checked=true&locale=zh-TW">活動購票</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      wh: window.innerHeight,
      ww: window.innerWidth,
      mobileWidth: 768,
      logoW: 'static/images/logo/logo-w.png',
      logoB: 'static/images/logo/logo-w.png',
      logo: 'static/images/logo/logo-w.png',
      menuStateOpen: false,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      this.logo = this.logoW;
      if (this.scrollPosition > this.wh - 20) {
        this.logo = this.logoB;
      } else {
        this.logo = this.logoW;
      }
    },
    handleResize() {
      this.ww = window.innerWidth;
    },
    handleToggleMenu() {
      if (this.menuStateOpen) {
        this.menuStateOpen = false;
      } else {
        this.menuStateOpen = true;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    window.addEventListener('resize', this.handleResize);
  },
  // created() {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  destroyed() {
    window.removeEventListener('scroll', this.updateScroll);
  },
};
</script>

<style lang="sass" scoped>
  a
    color: #fff
  .nav
    position: fixed
    top: 0px
    z-index: 100
    width: 100vw
    height: 4em

  .navBar
    height: 4em
    transition: .3s
    background: rgba(0,0,0,0)

  .isNormal
    color:  #fff
    transition: .3s

  .isScroll
    color: black
    background: rgba(105,137,156,.8)
    transition: .3s

  .logo
    position: absolute
    top: 1em
    left: 1.6em
    height: 2em
    width: auto
  .list
    position: absolute
    right: 2rem
    @media screen and (min-width: 1280px)
      right: calc((100% - 1280px)/2 + 2rem)
    a
      margin: 0 0.2em
      padding: 0 1em
      line-height: 4em
  // .toggle_menu
  .menu
    width: 100vw
    height: 100vh
    background: rgba(255,255,255,0.9)
    position: fixed
    top: 0
    padding-top: 50px
    color: #69899C
    a
      color: #69899C
      display: block
      text-align: center
      font-size: 1.2em
      margin: 0.5em
      line-height: 2em
  .toggle_menu
    z-index: 100
    color: black
    position: fixed
    right: 1.6em
    width: 44px
    height: 44px
    span
      width: 28px
      height: 1px
      background: #fff
      position: absolute
      right: 0
    .gnav--1
      top: 18px
    .gnav--2
      top: 26px
    .gnav--3
      top: 34px
  .toggle_menu_cross
    span
      background: #69899C
    .gnav--1
      transform: rotate(-45deg)
      top: 28px
    .gnav--2
      top: 26px
      display: none
    .gnav--3
      transform: rotate(45deg)
      top: 28px
</style>
