<template>
  <div id="app">
    <div class="page-wrapper animated fadeIn">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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
.page-wrapper{
  background-color: #FFF;
  position: absolute;
  height: 100%;
  width: 100%;
  right: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
