import {
  createRouter,
  createWebHashHistory
} from "vue-router"

const routes = [
  {
    path: '/',
    component: () => import('@/Examples/Buttons.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
