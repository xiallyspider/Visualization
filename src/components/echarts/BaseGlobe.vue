<template>
  <div style="height:100%; width:100%; text-align:left;">
    <div ref="baseGlobe" :style="globeSize" ></div>
  </div>  
</template>

<script>
import echarts from 'echarts'
import 'echarts-gl'
import bathy from '@/assets/echarts/world.topo.bathy.200401.jpg'
import starfield from '@/assets/echarts/starfield.jpg'
export default {
  props: {
    globeHeight: {
      type: String,
      default: '100%'
    },
    globeWidth: {
      type: String,
      default: '100%'
    }
  },
  data () {
    return {}
  },
  computed: {
    globeSize () {
      let style = {
        height: this.globeHeight,
        width: this.globeWidth
      }
      return style
    }
  },
  mounted () {
    this.initGlobe()
  },
  methods: {
    initGlobe () {
      let globeChart = echarts.init(this.$refs.baseGlobe)
      let option = {
        backgroundColor: '#000',
        globe: {
          baseTexture: bathy,
          heightTexture: bathy,
          displacementScale: 0.04,
          shading: 'realistic',
          environment: starfield,
          realisticMaterial: {
            roughness: 0.9
          },
          postEffect: {
            enable: true
          },
          light: {
            main: {
                intensity: 5,
                shadow: true
            }
          }
        }
      }
      globeChart.setOption(option)
    }
  }
}
</script>

<style>

</style>
