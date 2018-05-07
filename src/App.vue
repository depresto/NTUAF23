<template>
    <div>
      <div :class="loader" class="loader">
      </div>
      <section id="app">
        <router-view></router-view>
      </section>
    </div>
</template>

<script>
// eslint-disable-next-line import/no-webpack-loader-syntax
// import Pace from 'imports-loader?define=>false!pace-progress';

export default {
  name: 'app',
  data() {
    return {
      loader: '',
    };
  },
  created() {
    // const timestamp = new Date();
    // Pace.start({
    //   ajax: false,
    // });
    // Pace.on('done', () => {
    //   // console.log('done');
    //   // console.log(new Date() - timestamp);
    //   this.loader = 'hidden';
    // });
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

img {
  width: 100%;
}

.loader {
  display: none;
  width: 100vw;
  height: 100vh;
  background: #FFFDFE!important;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
}

</style>

<style lang="sass">
  .fade-enter-active, .fade-leave-active
    transition: opacity .3s

  .fade-enter, .fade-leave-to
    opacity: 0
</style>
