import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/all-universities',
      name: 'all-universities',
      component: () => import('../views/UniversityView.vue')
    },
    {
      path: '/about-us',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
