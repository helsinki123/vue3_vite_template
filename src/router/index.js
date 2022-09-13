import { createRouter, createWebHashHistory } from 'vue-router'
import home from '@/view/home/index.vue'
import login from '@/view/login/index.vue'
import testParent from '@/view/testView/testParent.vue'
const routes = [
  {
    path: '/home',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path:'/testParent',
    name:'testParent',
    component:testParent
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
