<template>
  <v-cards :items="items"></v-cards>
</template>

<script>
import config from '@/assets/dataConfig.js'
import vCards from '@/components/components/CardBoard.vue'
export default {
  components: {
    vCards
  },
  data () {
    return {
      items: config.trysomeItem
    }
  }
}
</script>

<style>
.try-some-wrapper{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.el-card {
    height: 270px;
    width: 300px;
    margin: 20px;
}
</style>
