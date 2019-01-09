/**
* 卡片组件
*/
<template>
  <div class="card-item-wrapper">
    <el-card :body-style="{ padding: '0px' }" v-for="item in items" :key="item.index">
      <img :src='require("@/assets/" + item.img)' class="image">
      <div style="padding: 14px;">
        <span>{{item.name}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ item.createTime }}</time>
           <router-link :to="item.path"><el-button type="text" class="button">详情</el-button></router-link>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  props: {
    items: Array
  }
}
</script>

<style>
.card-item-wrapper{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.image{
  width: 100%;
  display: block;
  height: 180px;
}
.el-card {
  height: 270px;
  width: 300px;
  margin: 20px;
}
.time {
  font-size: 13px;
  color: #999;
  float: left;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.button {
  padding: 0;
  float: right;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both
}
</style>
