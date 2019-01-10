<template>
  <div class="header-wrapper">
    <div class="logo-wrapper">
      <div class="logo" :class="{'logo-unfold':isUnfold}" @click="unfoldLogo">{{logoTxt}}</div>
    </div>
    <ul class="operations-wrapper">
      <router-link :to="item.path" v-for="item in operations" :key="item.name" @click="changeIndex(item)" activeClass="operation-active" class="operation-color">
        <li :class="{ operation:isOperation,  'operation-active': item.isActive }">{{item.name}}</li>
      </router-link>
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
        {name: '简介', path: '/intro', isActive: false},
        {name: 'Echarts', path: '/echarts', isActive: false},
        {name: 'Leaflet', path: '/leaflet', isActive: false},
        {name: 'Three.js', path: '/three', isActive: false},
        {name: '技术实验室', path: '/trysome', isActive: false}
      ],
      isOperation: true,
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
    changeIndex (item) {
      this.operations.array.forEach(element => {
        if(element.name == item.name) {
          element.isActive = true
        } else {
          element.isActive = false
        }
      });
    }
  }
}
</script>
<style>
.header-wrapper {
  height: 50px;
  border-bottom: 1px solid #eae7e7;
  box-shadow: #eae7e7 0px 0px 10px;
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
}
.operation-color {
  color: cadetblue;
}
.operation:hover, .operation-active{
  color: #393e46;
  cursor: pointer;
  font-weight: 600;
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
