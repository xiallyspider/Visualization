<template>
  <div class="header-wrapper">
    <div class="logo-wrapper">
      <i>2F</i>
      <span>图表制作组件</span>
    </div>
    <div class="operations-wrapper">
      <span class="operation">{{operation1}}</span>
      <span class="operation">{{operation2}}</span>
      <span class="operation">{{operation3}}</span>
      <span class="operation">{{operation4}}</span>
      <span class="operation">{{operation5}}</span>
    </div>
    <div class="theme">
      <i class="user-theme"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      operation1: '简介',
      operation2: 'Echarts',
      operation3: 'Laeflet',
      operation4: 'Three.js',
      operation5: '技术实验室',
      menu: [{
        name: '退出登录',
        index: '1'
      }, {
        name: '其他',
        index: '2'
      }]
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
  width: 45px;
  position: absolute;
  line-height: 50px;
  margin-left: 25%;
}
.logo-wrapper span {
  color: aliceblue;
}
.logo-wrapper i {
  background-color: black;
  height: 100%;
  width: 100%;
  display: inline-block;
  color: aliceblue;
  font-size: 15px;
  cursor: pointer;
}
.operations-wrapper span {
  line-height: 50px;
  margin: 0 7px;
  color: #a5a2a2;
  border-bottom: 2px solid rgba(0,0,0,0);
}
.operations-wrapper span:hover {
  color: #423e3e;
  border-bottom: 2px solid #423e3e;
}
</style>
