<template>
  <section class="section">
    <mu-row gutter>
      <mu-col width="100" tablet="33" desktop="33">
        <div class="department">
          <div class="name">
            變策展部
          </div>
          <div class="discription">
            帶領大家理解藝術治療內涵當中非常重視的結構與解構。讓參與者跟著講師的腳步
          </div>
          <div class="btn">
            前往專頁
          </div>
          <img class="department1_img" src="../assets/images/hero/hero_head.png">
        </div>
      </mu-col>

      <mu-col width="100" tablet="33" desktop="33">
        <div class="department">
          <div class="name">
            形策展部
          </div>
          <div class="discription">
            帶領大家理解藝術治療內涵當中非常重視的結構與解構。讓參與者跟著講師的腳步
          </div>
          <div class="btn">
            前往專頁
          </div>
          <img class="department1_img" src="../assets/images/hero/hero_hand.png">
        </div>
      </mu-col>

      <mu-col width="100" tablet="33" desktop="33">
        <div class="department">
          <div class="name">
            學策展部
          </div>
          <div class="discription">
            帶領大家理解藝術治療內涵當中非常重視的結構與解構。讓參與者跟著講師的腳步
          </div>
          <div class="btn">
            前往專頁
          </div>
          <img class="department1_img" src="../assets/images/hero/hero_foot.png">
        </div>
      </mu-col>
    </mu-row>
  </section>
</template>


<style lang="css" scoped>
.section {
  max-width: 1080px;
  margin:  80px auto;
}

 .department {
  height: 360px;
  background: #4A7583;
  position: relative;
  padding: 1.5em;
  text-align: left;
  margin: 1em 0;
 }

 .name {
  font-size: 2em;
  color: #fff;
 }

 .discription {
  color: #fff;
 }

 .btn {
  background: #fff;
  color: #4A7583;
  text-align: center;
  padding: .6em 0;
  width: 10.5em;
  position: absolute;
  bottom: 2em;
  right: 2em;
 }

 .department1_img {
  position: absolute;
  width: auto;
  height: 13em;
  bottom: 0;
  left: 1em;
 }
</style>
