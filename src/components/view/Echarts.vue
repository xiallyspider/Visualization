<template>
  <div class="chart-index-wrapper">
    <el-card :body-style="{ padding: '0px' }" v-for="item in echartsDemo" :key="item.index">
      <img :src='require("@/assets/" + item.img)' class="image">
      <div style="padding: 14px;">
        <span>{{item.name}}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button" @click=chartCardClick(item)>详情</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentDate: new Date().toLocaleDateString(),
      echartsDemo: [
        { name: '表格与图表转换', img: 'echarts/table2chart.jpg', index: '0' },
        { name: '地图聚合', img: 'echarts/clustermap.jpg', index: '1' },
        { name: '地图测量', img: 'echarts/map.jpg', index: '2' }
      ]
    }
  },
  methods: {
    chartCardClick (item) {
      console.log(item)
    }
  }
}
</script>

<style>
.chart-index-wrapper{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
