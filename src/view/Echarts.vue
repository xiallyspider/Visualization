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
      items: config.echartsItem
    }
  }
}
</script>

<style>
</style>
