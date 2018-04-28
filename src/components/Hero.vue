<template>
  <section class="hero"
   :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
  >
    <div class="title">
      <img class="workspace1" src="static/images/hero/workspace1.png">
    </div>
    <div class="title_mobile_only">
      <img class="workspace2" src="static/images/hero/workspace2.png">
    </div>
    <div class="h1">NTU<br/>ART<br/>FESTIVAL </div>
  </section>
</template>

<script>
export default {
  extends: {
    data() {
      return {
        backgroundImage: 'static/images/hero/background.jpg',
      };
    },
  },
};
</script>
<style scoped>
img {
  max-height: 100%;
  width: auto;
}
.hero {
  height: 100vh;
  background: #e9d0d6 url(/static/images/hero/background.jpg);
  background-size: cover;
  overflow: hidden;
  width: 100%;
  position: relative;
}
.title{
  display: block;
  width: 100%;
  height: 100vh;
  position: absolute;
  top:0%;
  left:0%;
}
.workspace1{
  max-width: 100%;
  position: absolute;
  top: 0;left: 0;right: 0;bottom: 0;
  margin: auto;
}
.h1 {
  text-align: left;
  color: #FFF;
  font-size: 32px;
  margin-left: 20px;
  position: absolute;
  bottom: 50px;
  left: 50px;
}
</style>

<style lang="sass" scoped>
.title_mobile_only
  display: none
@media only screen and (max-width: 768px)
  .workspace1
    display: none
  .workspace2
    // height: 100vh
    width: 100%
  .h1
    font-size: 20px
  .title
    display: none
  .title_mobile_only
    display: block
    width: 100%
    height: 100vh
    position: absolute
</style>
