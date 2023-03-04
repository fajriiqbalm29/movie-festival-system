import { createRouter, createWebHistory, RouteRecordRaw  } from 'vue-router'

const routes:Array<RouteRecordRaw>  = [
    {
        path: '/',
        meta: { title: 'Home', layout: 'blank' },
        component: () => import('../views/Home.vue'),
    },
    {
        path: '/dashboard',
        meta: { title: 'Home', layout: 'dashboard' },
        component: () => import('../views/dashboard/index.vue'),
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'text-yellow',
})
export default router
