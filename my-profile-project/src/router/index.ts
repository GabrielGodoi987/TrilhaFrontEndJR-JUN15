import { createRouter, createWebHistory } from 'vue-router'
import { DefaultRoutes } from '@/models/DefaultRouters'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'layout principal',
      component: () => import('@/layouts/BlankLayout.vue'),
      children: [
        {
          path: DefaultRoutes.home,
          name: 'Home Page',
          component: () => import('@/views/HomeView.vue')
        }
      ]
    }
  ]
})

export default router
