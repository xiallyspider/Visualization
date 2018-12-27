<template>
  <div id="app">
    <v-head></v-head>
    <div class="content-wrapper animated fadeIn">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import vHead from '@/components/components/Header.vue'
export default {
  name: 'App',
  components: {
    vHead
  }
}
</script>

<style>
body {
  margin: 0px;
  height: 100%;
  width: 100%;
  user-select:none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0px;
  margin: 0px;
  height: 100%;
  width: 100%;
  min-width: 1366px;
}
.content-wrapper{
  background-color: #FFF;
  position: absolute;
  height: calc(100% - 51px);
  width: 100%;
  right: 0px;
  padding: 20px;
  box-sizing: border-box;
}
</style>
