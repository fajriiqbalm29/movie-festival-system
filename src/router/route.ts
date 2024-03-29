import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'
import {useUserStore} from "@/store/userStore"
const routes:Array<RouteRecordRaw>  = [
    {
        path: '/',
        meta: { title: 'Home', layout: 'default',isPublic : true },
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/movie/:slug',
        meta: { title: 'Detail', layout: 'default',isPublic : true },
        component: () => import('@/views/movie/DetailMovie.vue'),
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
        path: '/admin/most-voted',
        meta: { title: 'Most Voted', layout: 'dashboard', isPublic : false },
        component: () => import('@/views/dashboard/movie/MostVoted.vue'),
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
  const store = useUserStore()
  const loggedIn = store.getUser ? true : false

  if (to.matched.some(record => !record.meta.isPublic)) {
    if (!loggedIn) {
      next('/login')
    }
  }
  next()
})

export default router
