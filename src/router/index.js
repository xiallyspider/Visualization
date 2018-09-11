import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/view/Home'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/home',
    name: 'home',
    component: home,
    children: [{
      path: '/upload',
      name: 'upload',
      component: home
    }, {
      path: '/table2chart',
      name: 'table2chart',
      component: home
    }, {
      path: '/other',
      name: 'other',
      component: home
    }]
  }, {
    path: '/login',
    component: resolve => require(['../components/Login.vue'], resolve)
  }]
})
