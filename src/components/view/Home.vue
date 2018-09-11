<template>
  <div class="home-page">
    <v-head></v-head>
    <v-sidebar></v-sidebar>
    <div class="content-wrapper">

    </div>
  </div>
</template>

<script>
import vHead from '../components/Header.vue'
import vSidebar from '../components/Sidebar.vue'
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
}
</style>
