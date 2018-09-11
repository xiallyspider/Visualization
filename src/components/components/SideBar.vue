<template>
  <div class="side-bar">
    <el-menu  
    :default-active="onRoutes"
    class="el-menu-a"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    unique-opened router>
      <template v-for="item in menu">
        <el-menu-item :key=item.index :index=item.index>
          <i :class=item.icon></i>
          <span>{{item.name}}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'homePage',
  computed: {
    onRoutes () {
      // this.$alert(this.$route)
      return this.$route.path.replace('/', '')
    }
  },
  data () {
    return {
      menu: [{
        icon: 'el-icon-star-on',
        index: 'home',
        name: '首页'
      }, {
        icon: 'el-icon-menu',
        index: 'upload',
        name: '数据导入'
      }, {
        icon: 'el-icon-picture',
        index: 'table2chart',
        name: '图表'
      }, {
        icon: 'el-icon-setting',
        index: 'other',
        name: '其他'
      }]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .side-bar {
    width: 240px;
    position: absolute;
    top: 60px;
    bottom: 0px;
    background-color:#545c64;
  }
  .el-menu-a {
    width: 240px;
    border: none;
  }
  .el-menu-a i {
    float: left;
    margin-top: 20px;
  }
  .el-menu-a span {
    margin-right: 10px;
  }
</style>
