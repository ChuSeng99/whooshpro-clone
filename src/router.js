import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Works from './views/Works.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/works', component: Works, name: 'Works' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
