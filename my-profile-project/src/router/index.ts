import { createRouter, createWebHistory } from 'vue-router'
import {DefaultRoutes} from "@/models/DefaultRouters";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: DefaultRoutes.error,
      name: 'Error page',
      component: () => import('@/views/ErrorNotFoundView.vue')
    },
    {
      path: DefaultRoutes.home,
      name: 'layout principal',
      component: () => import('@/layouts/BlankLayout.vue'),
      redirect: DefaultRoutes.home,
      children: [
        {
          path: '',
          name: 'Home Page',
          component: () => import('@/views/HomeView.vue')
        },
        {
          path: DefaultRoutes.blog,
          name: 'Blog',
          component: () => import('@/views/BlogView.vue')
        },
        {
          name: "About Page",
          path: DefaultRoutes.about,
          component: () => import('@/views/AboutPage.vue')
        },
        {
          name: 'Register Page',
          path: DefaultRoutes.signup,
          component: () => import('@/views/RegisterPage.vue')
        },
        {
          name: 'Login Page',
          path: DefaultRoutes.login,
          component: () => import('@/views/AuthUser/LoginUser.vue')
        }
      ]
    }
  ]
})

export default router
