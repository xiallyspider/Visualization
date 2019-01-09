<template>
  <div style="height:100%; width:100%; text-align:left;">
    <div id="map" :style="mapSize" ></div>
  </div>  
</template>

<script>
import L from 'leaflet'
export default {
 props: {
    mapHeight: {
      type: String,
      default: '100%'
    },
    mapWidth: {
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
    mapSize () {
      return {
        height: this.mapHeight,
        width: this.mapWidth
      }
    }
  },
  methods: {
    init () {
      let map = L.map('map').setView([30.6, 104], 10);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      }).addTo(map);
    }
  }
}
</script>

<style>

</style>
