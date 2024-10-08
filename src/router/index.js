import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Landing
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
