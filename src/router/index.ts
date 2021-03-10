import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Layout',
        // redirect: '/dashboard',
        component: () => import('../layout/index.vue'),
        meta: {
            title: '首页'
        },
    }
] 

const router = createRouter({
    // process.env.BASE_URL
    history: createWebHashHistory(''),
    routes
})

 
export default router
