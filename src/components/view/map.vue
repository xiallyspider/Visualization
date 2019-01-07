<template>
  <div style="height: calc(70% - 51px);width: 100%; margin: 7% 0px 5% 0;">
    <v-mapbox 
    mapHeight="100%" 
    mapWidth="100%"
    :center="center"
    :zoom="zoom" ></v-mapbox>
  </div>  
</template>

<script>
import vMapbox from '@/components/components/mapbox.vue'
export default {
  components: {
    vMapbox
  },
  data () {
    return {
     center: [104, 30.6],
     zoom: 10
    }
  }
}
</script>

<style>

</style>
