<template>
  <div class="header-wrapper">
    <div class="logo-wrapper">
      <div class="logo" :class="{'logo-unfold':isUnfold}" @click="unfoldLogo">{{logoTxt}}</div>
    </div>
    <ul class="operations-wrapper">
      <router-link :to="item.path" v-for="(item, key, index) in operations" :key="item.name" @click="changeIndex(index)" ><li :class="currentIndex == index ? 'operation operation-active':'operation'">{{item.name}}</li></router-link>
    </ul>
    <div class="theme">
      <i class="user-theme"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logoTxt: '2F',
      operations: [
        {name: '简介', path: '/home'},
        {name: 'Echarts', path: '/echarts'},
        {name: 'Laeflet', path: '/leaflet'},
        {name: 'Three.js', path: '/leaflet'},
        {name: '技术实验室', path: '/trysome'}
      ],
      currentIndex: 0,
      isUnfold: false,
      menu: [{
        name: '退出登录',
        index: '1'
      }, {
        name: '其他',
        index: '2'
      }]
    }
  },
  methods: {
    unfoldLogo () {
      var self = this
      this.isUnfold = !this.isUnfold
      if (this.isUnfold) {
        this.logoTxt = ''
      } else {
        setTimeout(() => {
          self.logoTxt = '2F'
        }, 500)
      }
    },
    changeIndex (index) {
      this.currentIndex = index
    }
  }
}
</script>
<style>
.header-wrapper {
  height: 50px;
  border-bottom: 1px solid #eae7e7;
}
.logo-wrapper {
  height: 50px;
  width: 50px;
  position: absolute;
  line-height: 50px;
  margin-left: 25%;
}
.logo-wrapper span {
  color: aliceblue;
}
.logo{
  transform: scale(1,1);
  transition: 0.5s;
  border-radius: 50%;
  position: absolute;
  background-color: #226777;
  height: 100%;
  width: 100%;
  display: inline-block;
  color: aliceblue;
  font-size: 15px;
  cursor: pointer;
  z-index: 1;
  overflow: hidden;
}
.logo-unfold{
  transform: scale(30,30);
}
.loginGame {
  background-color: aliceblue;
  height: 300px;
  width: 300px;
  position: absolute;
  z-index: 2;
  left: 50px;
}
.operations-wrapper{
  display: inline-block;
  position: relative;
  height: 100%;
  margin: 0;
}
.operation {
  display: inline-block;
  padding: 0 14px;
  width: 80px;
  line-height: 50px;
  color: cadetblue;
}
.operation:hover, .operation-active{
  color: #393e46;
  cursor: pointer;
}
.operation::after {
    content: "";
    display: block;
    width: 0;
    border-bottom: 2px solid #393e46;
    transition: 0.2s all linear;
}
.operation:hover::after {
    width: 100%;
    left: 0;
}
.operation:hover ~ .operation::after {
    left: 0;
}
/* .operations-wrapper span:hover {
  color: #423e3e;
} */
</style>
