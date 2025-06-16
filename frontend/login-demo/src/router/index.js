import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login/index.vue'
import Register from '../views/Register/index.vue'
import Home from '../views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',     // 路径
      component: Login    // 跳转到的组件
    },
    {
      path: '/register',     // 路径
      component: Register    // 跳转到的组件
    },
    {
      path: '/home',     // 路径
      component: Home    // 跳转到的组件
    }
  ],
})

export default router
