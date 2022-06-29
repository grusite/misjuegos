import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useUserStore } from '../stores/user'

import Dashboard from '@/views/Dashboard.vue'
import Forms from '@/views/Forms.vue'
import Tables from '@/views/Tables.vue'
import UIElements from '@/views/UIElements.vue'
import Login from '@/views/Login.vue'
import Modal from '@/views/Modal.vue'
import Card from '@/views/Card.vue'
import Blank from '@/views/Blank.vue'
import NotFound from '@/views/NotFound.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: {
      layout: 'empty',
      allowAnonymous: true,
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms,
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Card,
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
  },
  {
    path: '/ui-elements',
    name: 'UIElements',
    component: UIElements,
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal,
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Blank,
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()

  const noRequiresAuth = to.matched.some((record) => record.meta.allowAnonymous === true)
  const isAuthenticated = userStore.isAuthenticated

  if (noRequiresAuth && isAuthenticated) {
    next('/dashboard')
  } else if (to.name !== 'Login' && !isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
