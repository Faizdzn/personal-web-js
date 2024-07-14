import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/ProjectView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Projects Page',
      component: HomeView
    },
    {
      path: '/contact',
      name: 'Contact Page',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'Error 404',
      component: () => import('../views/extra/ErrorPage_404.vue'),
    }
  ]
})

export default router
