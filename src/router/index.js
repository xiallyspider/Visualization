import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/home',
    name: 'home',
    component: resolve => require(['../components/view/Home.vue'], resolve),
    children: [{
      path: '/upload',
      name: 'upload',
      component: resolve => require(['../components/view/Upload.vue'], resolve)
    }, {
      path: '/table2chart',
      name: 'table2chart',
      component: resolve => require(['../components/view/Table2Chart.vue'], resolve)
    }, {
      path: '/other',
      name: 'other',
      component: resolve => require(['../components/view/FlexLayout.vue'], resolve)
    }]
  }, {
    path: '/login',
    component: resolve => require(['../components/Login.vue'], resolve)
  }]
})
