<template>
  <div class="home-page">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-wrapper">
      <transition name="move" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>

<script>
import vHead from '@/components/components/Header.vue'
import vSidebar from '@/components/components/Sidebar.vue'
export default {
  components: {
    vHead, vSidebar
  }
}
</script>

<style>
.home-page{
  height: 100%;
  width: 100%;
}
.content-wrapper {
  background-color: #FFF;
  position: absolute;
  height: calc(100% - 60px);
  width: calc(100% - 240px);
  right: 0px;
  overflow: hidden;
}
</style>
