<template>
  <div style="height: calc(70% - 51px);width: 100%; margin: 5% 0px 5% 0;">
    <h3>{{mapTitle}}</h3>
    <v-baseglobe 
    globeHeight="100%" 
    globeWidth="100%"></v-baseglobe>
  </div>  
</template>

<script>
import vBaseglobe from '@/components/echarts/BaseGlobe.vue'
export default {
  components: {
    vBaseglobe
  },
  data () {
    return {
      mapTitle: 'Echarts-gl: 基础地球'
    }
  }
}
</script>

<style>
h3 {
  color:aliceblue;
}
</style>
