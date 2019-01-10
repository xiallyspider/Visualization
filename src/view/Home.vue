<template>
  <div class="home-page">
    <v-head></v-head>
    <div class="content-wrapper">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import vHead from '@/components/public/Header.vue'
export default {
  components: {
    vHead
  }
}
</script>

<style>
.home-page{
  height: 100%;
  width: 100%;
}
.content-wrapper {
  position: absolute;
  height: calc(100% - 51px);
  width: 100%;
  right: 0px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
