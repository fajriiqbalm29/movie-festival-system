import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'

const routes:Array<RouteRecordRaw>  = [
    {
        path: '/',
        meta: { title: 'Home', layout: 'default',isPublic : true },
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/login',
        meta: { title: 'Home', layout: 'blank', isPublic : true },
        component: () => import('../views/Login.vue'),
    },
    {
        path: '/dashboard',
        meta: { title: 'Home', layout: 'dashboard', isPublic : false },
        component: () => import('../views/dashboard/index.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'text-yellow',
})


router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('access_token') ? true : false

  if (to.matched.some(record => !record.meta.isPublic)) {
    if (!loggedIn) {
      next('/login')
    }
  }
  next()
})

export default router
