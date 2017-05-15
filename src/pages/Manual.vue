<template>
  <transition appear name="fade">
    <div class="manual">
      <div>
        <navBar></navBar>
        <iframe style="width:100%; height:700px;" src="//e.issuu.com/embed.html#29486514/48462217" frameborder="0" allowfullscreen></iframe>
        <foot></foot>
      </div>
    </div>
  </transition>
</template>

<script>
import Foot from '@/components/Footer';
import NavBar from '@/components/NavBar';

export default {
  name: 'Manual',
  components: {
    Foot,
    NavBar,
  },
};
</script>
<style lang="sass" scoped>
.manual
  background: #69899C
iframe
  margin-top: 100px
  margin-bottom: 100px
</style>
<style lang="sass" >
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
<style lang="sass">
// .header-controls
//   &:hover
//    background-image: none !important
// .header-controls.is-visible
//   &:hover
//     background-image: none !important
//     opacity: 0
</style>
