<template>
  <div style="height: calc(70% - 51px);width: 100%; margin: 5% 0px 5% 0;">
    <h3>{{mapTitle}}</h3>
    <v-mapbox 
    mapHeight="100%" 
    mapWidth="100%"
    :center="center"
    :zoom="zoom" ></v-mapbox>
  </div>  
</template>

<script>
import vMapbox from '@/components/mapbox/Mapbox.vue'
export default {
  components: {
    vMapbox
  },
  data () {
    return {
     center: [104, 30.6],
     zoom: 10,
     mapTitle: 'mapbox-gl & Echarts-GL'
    }
  }
}
</script>

<style>
h3{
  color:aliceblue;
}
</style>
