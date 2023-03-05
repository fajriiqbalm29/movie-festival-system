import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'

const routes:Array<RouteRecordRaw>  = [
    {
        path: '/',
        meta: { title: 'Home', layout: 'default',isPublic : true },
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/login',
        meta: { title: 'Home', layout: 'blank', isPublic : true },
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/admin/dashboard',
        meta: { title: 'Dashboard', layout: 'dashboard', isPublic : false },
        component: () => import('@/views/dashboard/index.vue'),
    },
    {
        path: '/admin/most-viewed',
        meta: { title: 'Most Viewed', layout: 'dashboard', isPublic : false },
        component: () => import('@/views/dashboard/movie/MostViewed.vue'),
    },
    {
        path: '/admin/movie',
        meta: { title: 'Home', layout: 'dashboard', isPublic : false },
        component: () => import('@/views/dashboard/movie/index.vue'),
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
