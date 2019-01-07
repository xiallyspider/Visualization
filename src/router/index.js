import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    component: resolve => require(['../components/view/Home.vue'], resolve),
    children: [{
      path: '/leaflet',
      name: 'leaflet',
      component: resolve => require(['../components/view/leaflet.vue'], resolve)
    }, {
      path: '/echarts',
      name: 'echarts',
      component: resolve => require(['../components/view/Echarts.vue'], resolve)
    }, {
      path: '/trysome',
      name: 'trysome',
      component: resolve => require(['../components/view/trySome.vue'], resolve)
    }]
  }, {
    path: '/itemdetail',
    name: 'itemdetail',
    component: resolve => require(['../components/view/ItemDetail.vue'], resolve),
    children: [{
      path: 'map',
      name: 'map',
      component: resolve => require(['../components/view/map.vue'], resolve)
    }]
  }]
})
