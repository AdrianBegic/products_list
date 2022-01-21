import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'productList',
    component: () => import('../components/product_list')
  },
  {
    path: '/productPage/:id',
    name: 'productPage',
    component: () => import('../components/product_page.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router