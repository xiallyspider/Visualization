<template>
  <div style="width:100%;display:flex;justify-content:center; align-items:center;flex-direction: column;">
    <div class="personal-intro-wrapper" :style="divMargin">
      <img class="personal-intro-img" :src='require("@/assets/effact/me-photo.jpg")'/>
      <div class="personal-intro-txt">
        <span v-html="introTxt"></span>
      </div>
    </div>
    <div class="spc-effact-wrapper">
      <span class="spc-effact-banner">{{spcEffactBanner}}</span>
      <div class="spc-effact-list-wrapper">
        <div class="spc-effact-item" v-for="item in spcEffactList" :key="item.index" >
          <img :src='require("@/assets/" + item.img)' class="spc-effact-image">
          <div class="spc-effact-mask">
            <span class="spc-effact-name">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import config from '@/assets/dataConfig.js'
export default {
  data () {
    return {
      introTxt: config.introTxt,
      spcEffactBanner: 'CSS & JS 特效',
      spcEffactList: config.spcEffact
    }
  },
  computed: {
    divMargin () {
      let height = (window.screen.availHeight  - 660) / 2
      let obj = {
        margin: height + 'px 0px'
      }
      return obj
    }
  }
}
</script>

<style>
.personal-intro-wrapper{
  height: 560px;
  width: 1000px;
  border: 2px;
  display: flex;
  align-items: center;
}
.personal-intro-img{
  height: 100%;
  width: 270px;
}
.personal-intro-txt{
  display: inline-block;
  width: calc(100% - 270px);
  height: 60%;
  background-color: #F1F2F4;
  text-align: left;
  text-indent: 20px;
  padding: 20px;
}
.spc-effact-wrapper{
  height: 500px;
  width: 100%;
}
.spc-effact-banner{
  background-color: #344346;
  display: block;
  height: 177px;
  width: 100%;
  color: #fff;
  line-height: 177px;
  font-size: 28px;
}
.spc-effact-list-wrapper{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
}
.spc-effact-item{
  height: 230px;
  width: 20%;
  overflow: hidden;
}
.spc-effact-image{
  height: 100%;
  width: 100%;
  transition: all .5s;
}
.spc-effact-mask{
    position: relative;
    bottom: 80px;
    height: 60px;
    color: rgba(0,0,0,0);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-size: 22px;
}
.spc-effact-image:hover~.spc-effact-mask{
  color: #fff;
  background-color: rgba(23,23,23,0.4);
}
.spc-effact-image:hover{
  cursor: pointer;
  transform: scale(1.2);
}
</style>
