<template>
  <div id="app">
    <v-head></v-head>
    <router-view/>
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
</style>
