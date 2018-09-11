<template>
  <div class="header-wrapper">
    <div class="logo-wrapper">
      <i></i>
      <span>图表制作组件</span>
    </div>
    <div class="user-info">
      <i></i>
      <el-dropdown>
        <el-dropdown-menu v-for="item in menus" :key="item.index" slot="dropdown">
          <el-dropdown-item>{{item.name}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      menus: [{
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
.user-info {
  height: 50px;
  width: 50px;
  line-height: 60px;
  float: right;
  margin-top: 5px;
  margin-right: 50px;
  cursor: pointer;
}
.user-info i {
  background-image: url(../../../static/img/user.png);
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  display: inline-block;
}
</style>
