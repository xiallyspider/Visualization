<template>
  <div style="height:100%; width:100%; text-align:left;">
    <div ref="baseScatter3D" :style="chartSize" ></div>
  </div>  
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
export default {
  props: {
    chartHeight: {
      type: String,
      default: '100%'
    },
    chartWidth: {
      type: String,
      default: '100%'
    }
  },
  data () {
    return {}
  },
  mounted () {
    this.init()
  },
  computed: {
    chartSize () {
      return {
        height: this.chartHeight,
        width: this.chartWidth
      }
    }
  },
  methods: {
    init () {
      let chart = echarts.init(this.$refs.baseScatter3D)
      let data = this.getRandomData()
      let option = {
        visualMap: {
          show: false,
          inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
          }
        },
        xAxis3D: {},
        yAxis3D: {},
        zAxis3D: {},
        grid3D: {
          boxWidth: '100',
          boxWidth: '100',
          boxDepth: '100',
          // axisLine: { show: false},
          // axisLabel: { show: false},
          // axisTick: { show:false},
          // splitLine: { show:false},
          // splitArea: { show:false},
          // axisPointer: { show:false},
          light: {
            main: { color: '#000'},
            ambient:{ color: '#000'}
          }
        },
        series: {
          type: 'scatter3D',
          symbolSize: 5,
          data: data
        }
      }
      chart.setOption(option)
    },
    getRandomData () {
      let data = []
      for( let x = 0; x < 1000; x++ ) {
        data[x] = [ (100*Math.random()).toFixed(0), (100*Math.random()).toFixed(0), (100*Math.random()).toFixed(0) ]
      }
      return data
    }
  }
}
</script>

<style>

</style>
