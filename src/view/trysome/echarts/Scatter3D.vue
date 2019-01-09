<template>
  <div style="height: calc(70% - 51px);width: 100%; margin: 5% 0px 5% 0;">
    <h3>{{mapTitle}}</h3>
    <v-scatter3-d 
    chartHeight="100%" 
    chartWidth="100%"></v-scatter3-d >
  </div>  
</template>

<script>
import vScatter3D from '@/components/echarts/Scatter3D.vue'
export default {
  components: {
    vScatter3D
  },
  data () {
    return {
      mapTitle: 'Echarts-gl: 基础三维散点图'
    }
  }
}
</script>

<style>
h3 {
  color: aliceblue;
}
</style>
