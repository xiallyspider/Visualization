<template>
  <div class="flex-layout-wrapper">
    <div class="flex-item">
      <p>i'm the first item</p>
    </div>
    <div class="flex-item end">
      <div class="flex-ii" v-for="x in 10" :key="x"></div>
    </div>
  </div>
</template>
<script>
  
</script>

<style>
.flex-layout-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.flex-item {
  height: calc(50% - 40px);
  width: 50%;
  background-color: aquamarine;
  margin: 20px;
  border-radius: 10px; 
}
.end {
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.flex-ii {
  height: 100px;
  width: 100px;
  background-color: azure;
  margin: 10px;
}
</style>
