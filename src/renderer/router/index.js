import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/pages/home/home.vue').default,
      redirect:'platform',
      children: [
        {
          path: '/platform',
          name: 'platform',
          meta: { title: '工作台' },
          component: require('@/pages/platform/platform.vue').default
        }
      ]
    }
  ]
})
