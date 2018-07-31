import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
Vue.use(Router)
Vue.use(Meta)
const Index = resolve => {
  require.ensure([], () => {
    resolve(require('../views/Index'))
  }, 'index')
}
const NotFound = resolve => {
  require.ensure([], () => {
    resolve(require('../views/Not-found'))
  }, 'not-found')
}
export default new Router({
  base: process.env.VUE_APP_BASE_NAME,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound
    }
  ]
})
