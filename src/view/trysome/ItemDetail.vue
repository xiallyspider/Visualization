<template>
  <div class="page-wrapper2">
    <v-detailheader></v-detailheader>
    <div class="content-wrapper">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import vDetailheader from '@/components/public/DetailHeader.vue'
export default {
  components: {
    vDetailheader
  }
}
</script>

<style scoped>
.page-wrapper2{
  height: 100%;
  width: 100%;
  background-color: #1d5464;
}
.content-wrapper{
  height: calc(100% - 50px);
  width: 100%;
  position: absolute;
  top: 50px;
  overflow: hidden;
}
</style>
