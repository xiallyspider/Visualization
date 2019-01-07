<template>
  <div class="detail-header-wrapper">
    <i @click="backToLastPage"></i>
  </div>
</template>

<script>
export default {
  methods: {
    backToLastPage () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.detail-header-wrapper{
  height: 50px;
  width: 100%;
}
.detail-header-wrapper i{
  background-image: url(../../assets/detail/back.png);
  background-size: 100% 100%;
  height: 40px;
  width: 40px;
  display: inline-block;
  position: absolute;
  left: 10px;
  top: 8px;
  cursor: pointer;
}
</style>
