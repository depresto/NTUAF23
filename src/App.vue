<template>
  <transition appear name="fade">
    <section id="app">
      <router-view></router-view>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'app',
};
</script>

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

</style>

<style lang="sass">
  .fade-enter-active, .fade-leave-active
    transition: opacity .3s

  .fade-enter, .fade-leave-to
    opacity: 0
</style>
