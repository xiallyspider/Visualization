<template>
  <div style="height:100%; width:100%; text-align:left;">
    <div ref="mapbox" :style="mapSize" ></div>
  </div>
</template>

<script>
import L from 'leaflet'
import mapboxgl from 'mapbox-gl'
import echarts from 'echarts'
export default {
   props: {
    mapWidth: {
      type: String,
      default: '100%'
    },
    mapHeight: {
      type: String,
      default: '100%'
    },
    center:{
      type: Array,
      default: [104, 30.6]
    },
    zoom:{
      type: Number,
      default: 10
    }
  },
  data () {
     return {
      chart: null,
      options: null,
      map: null
    }
  },
  mounted () {
    this.inntMapCharts();
  },
  computed: {
    inntMapCharts () {
      mapboxgl.accessToken = 'pk.eyJ1IjoieGlhbGx5IiwiYSI6ImNqcWx6MGRiZTZoOWczeHBwMWI0czQ0OXoifQ.6N3isIrC6mQyCbKC40A4qQ'
      this.map = new mapboxgl.Map({
        container: this.$refs.mapbox,
        style: 'mapbox://styles/mapbox/satellite-v9',
        center: this.center,
        zoom: this.zoom,
        pitch: 50,
        bearing: 0,
        boxHeight: 20,
        light: {
          main: {
            intensity: 1,
            shadow: true,
            shadowQuality: 'high'
          },
          ambient: {
            intensity: 0.2
          }
        }
      })
    },
    mapSize () {
      let styleObj = {
        width: this.mapWidth,
        height: this.mapHeight
      }
      return styleObj
    }
  }
}
</script>

<style>
@import url('https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.2/mapbox-gl.css');
.map-wrapper{
  height: 60%;
  margin: 10% 0;
};
</style>
