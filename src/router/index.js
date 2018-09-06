import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    children: [{
      path: '/upload',
      name: 'upload',
      component: HelloWorld
    }, {
      path: '/chart',
      name: 'chart',
      component: HelloWorld
    }, {
      path: '/other',
      name: 'other',
      component: HelloWorld
    }]
  }, {
    path: '/login',
    component: resolve => require(['../components/Login.vue'], resolve)
  }]
})
