import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import Home from '@/views/Home.vue'
import DashboardPage from '@/views/DashboardPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardPage
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const access_token = localStorage.access_token 
  if (to.name === 'login' && access_token) next({ name: 'dashboard' })
  else if (to.path === '/' && !access_token) next({ name: 'login' })
  else next()
})

export default router
