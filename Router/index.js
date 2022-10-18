import VueRouter from "vue-router"

const routes = [
  {
    path: '/',
    component: () => import('@/Examples/Button.vue')
  },
]

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
