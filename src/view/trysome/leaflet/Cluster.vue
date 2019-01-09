<template>
  <div style="height: calc(70% - 51px);width: 100%; margin: 5% 0px 5% 0;">
    <h3>{{mapTitle}}</h3>
    <v-cluster
      mapHeight='600px'
      mapWidth="1920px"
    ></v-cluster >
  </div>  
</template>

<script>
import vCluster from '@/components/leaflet/Cluster.vue'
export default {
  components: {
    vCluster
  },
  data () {
    return {
     center: [104, 30.6],
     zoom: 10,
     mapTitle: 'leaflet: 基础地图'
    }
  }
}
</script>

<style>
h3{
  color:aliceblue;
}
</style>
