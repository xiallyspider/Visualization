import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/intro'
  }, {
    path: '/home',
    name: 'home',
    component: resolve => require(['../view/Home.vue'], resolve),
    children: [ {
      path: '/intro',
      name: 'intro',
      component: resolve => require(['../view/Intro.vue'], resolve)
    }, {
      path: '/leaflet',
      name: 'leaflet',
      component: resolve => require(['../view/leaflet.vue'], resolve)
    }, {
      path: '/echarts',
      name: 'echarts',
      component: resolve => require(['../view/Echarts.vue'], resolve)
    }, {
      path: '/three',
      name: 'three',
      component: resolve => require(['../view/Three.vue'], resolve)
    }, {
      path: '/trysome',
      name: 'trysome',
      component: resolve => require(['../view/trySome.vue'], resolve)
    }]
  }, {
    path: '/itemdetail',
    name: 'itemdetail',
    component: resolve => require(['../view/trysome/ItemDetail.vue'], resolve),
    children: [{
      path: 'map',
      name: 'map',
      component: resolve => require(['../view/trysome/mapbox/map.vue'], resolve)
    }, {
      path: 'baseglobe',
      name: 'baseglobe',
      component: resolve => require(['../view/trysome/echarts/BaseGlobe.vue'], resolve)
    }, {
      path: 'scatter3D',
      name: 'scatter3D',
      component: resolve => require(['../view/trysome/echarts/Scatter3D.vue'], resolve)
    }, {
      path: 'cluster',
      name: 'cluster',
      component: resolve => require(['../view/trysome/leaflet/Cluster.vue'], resolve)
    }, {
      path: 'parallax_3d',
      name: 'parallax_3d',
      component: resolve => require(['../view/trysome/css/parallax_3d.vue'], resolve)
    }, {
      path: 'parallax_fixed',
      name: 'parallax_fixed',
      component: resolve => require(['../view/trysome/css/parallax_fixed.vue'], resolve)
    }]
  }]
})
