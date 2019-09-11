import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/produtos',
      name: 'produtos',
      component: () => import('./views/Produtos')
    },
    {
      path:'/axios',
      name:'axios',
      component: () => import('./views/Axios')
    },
    {
      path: '/produtos-resource',
      name: 'produtos-resource',
      component: () => import('./views/ProdutosResource')
    }
  ]
})
