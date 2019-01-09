//leaflet及其他插件的使用示例
<template>
  <v-cards :items="items"></v-cards>
</template>

<script>
import config from '@/assets/dataConfig.js'
import vCards from '@/components/public/CardBoard.vue'
export default {
  components: {
    vCards
  },
  data () {
    return {
      items: config.leafletItem
    }
  }
}
</script>
<style>
</style>
