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
      path: '/echarts',
      name: 'echarts',
      component: resolve => require(['../components/view/Echarts.vue'], resolve)
    }, {
      path: '/leaflet',
      name: 'leaflet',
      component: resolve => require(['../components/view/leaflet.vue'], resolve)
    }]
  }]
})
