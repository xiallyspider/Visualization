<template>
  <div class="header-wrapper">
    <div class="logo-wrapper">
      <i></i>
      <span>图表制作组件</span>
    </div>
    <div class="other-info">
      <i class="more"></i>
      <i class="remind"></i>
      <i class="about"></i>
    </div>
    <div class="user-info">
      <i class="user-head"></i>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
  background-color: black;
  height: 60px;
}
.logo-wrapper {
  height: 40px;
  width: 40px;
  position: absolute;
  line-height: 60px;
  margin-left: 10px;
  margin-top: 10px;
}
.logo-wrapper span {
  color: aliceblue;
}
.logo-wrapper i {
  background-image: url(../../../static/img/logo.png);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  display: inline-block;
}
.other-info {
  height: 40px;
  width: 120px;
  display: inline-block;
  position: absolute;
  right: 120px;
  top: 10px;
}
.other-info i {
  height: 20px;
  width: 20px;
  display: inline-block;
  margin-left: 15px;
  margin-top: 10px;
  background-size: 100% 100%;
  cursor: pointer;
}
.about {
  background-image: url(../../../static/img/about.png);
}
.more {
  background-image: url(../../../static/img/more.png);
}
.remind {
  background-image: url(../../../static/img/remind.png);
}
.user-info {
  height: 40px;
  width: 40px;
  line-height: 60px;
  float: right;
  margin-top: 10px;
  margin-right: 50px;
  cursor: pointer;
  border: 1px solid;
  border-radius: 50%;
  -webkit-box-shadow: white 0px 0px 10px 1px;
  box-shadow: white 0px 0px 20px 0px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.user-info i {
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  display: inline-block;
}
.user-head {
  background-image: url(../../../static/img/user.png);
}
</style>
