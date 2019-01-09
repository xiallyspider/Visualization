<template>
  <div :style="sideBarStyle"></div>
</template>

<script>
export default {
  props: {
    height: {
      type: String
    },
    width: {
      type: String
    },
    float: {
      type: String
    }
  },
  data () {
    return {}
  },
  computed: {
    sideBarStyle () {
      return {
        height: this.height,
        width: this.width,
        float: this.float
      }
    }
  }
}
</script>

<style>

</style>
