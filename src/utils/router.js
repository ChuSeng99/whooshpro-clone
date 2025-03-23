import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import Design from '@/views/Design.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/works', component: Works, name: 'Works' },
  { path: '/design', component: Design, name: 'Design' },
]

const router = createRouter({
  history: createWebHistory('/whooshpro-clone/'),
  routes,
})

export default router
