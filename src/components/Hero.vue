<template>
  <section class="hero"
   :style="{ 'background-image': 'url(' + backgroundImage + ')' }"
  >
    <img class="hero_hand float" src="static/images/hero/hero_hand1S.png">
    <img class="hero_hand2 float" src="static/images/hero/hero_hand2S.png">
    <img class="hero_foot float" src="static/images/hero/hero_foot1S.png">
    <img class="hero_foot2 float" src="static/images/hero/hero_foot2S.png">
    <img class="hero_body" src="static/images/hero/hero_bodyS.png">
    <img class="hero_head" src="static/images/hero/hero_headgif.gif">
    <div class="title">
    	<img class="bian1" src="static/images/hero/Title_01.png">
    	<img class="bian2" src="static/images/hero/Title_02.png">
    	<img class="xing1" src="static/images/hero/Title_03.png">
    	<img class="xing2" src="static/images/hero/Title_04.png">
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
  width: auto;
}
@keyframes float {
    0%   {transform: translateY(-12%);}
    100% {transform: translateY(12%);}
}
@keyframes expand {
    0%   {width: 270px; opacity: 0.0;}
    100% {width: 568px; opacity: 1.0;}
}
.hero {
  height: 100vh;
/*   background: #6c899a url(/static/images/hero/background.jpg); */
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
  width: 100%;
  position: relative;
}
.float {
  animation-name: float;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  transition-duration: 0.6s;
  transform: rotate(100deg);
}
.float:hover  {
  transform: rotate(10deg);
}
.hero_head {
  height: 315px;
  position: absolute;

  left: calc(36% - 172px);
  bottom: 130px;
}
.hero_body {
  height: 159px;
  bottom: 0;
  position: absolute;
  left: calc(36% - 387px);
}
.hero_hand {
  height: 247px;
  position: absolute;
  top: 20%;
  left: 6%;
  animation-duration: 2s;
}

.hero_hand2 {
  height: 281px;
  position: absolute;
  bottom: 11%;
  right: 18%;
  animation-duration: 1.8s;
}

.hero_foot {
  height: 174px;
  position: absolute;
  bottom: 26%;
  left: 7%;
  animation-duration: 2.4s;
}
.hero_foot2 {
  height: 145px;
  position: absolute;
  top: 24%;
  right: 3%;
  animation-duration: 2.2s;
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
.title {
	position: absolute;
	right: 38%;
	top: calc(12% + 300px * 0.6);
	width: 568px;
	height: 600px;
	overflow-x: hidden;
	transform: translate(50%,-50%) scale(0.6);

	transition-duration: 1s;
	animation-name: expand;
    animation-iteration-count: 1;
    animation-duration: 3.6s;
}
.title:hover{
	width: 280px;

}
.bian1 {
  height: 157px;
  position: absolute;
  top: 0;
  left: 0;
}
.bian2 {
  height: 252px;
  position: absolute;
  top: 0;
  right: 0;
}
.xing1 {
  height: 238px;
  position: absolute;
  bottom: 0;
  right: calc(20% + 48.4px);
}
.xing2 {
  height: 251px;
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
