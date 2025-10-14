import {createRouter, createWebHistory} from 'vue-router'
import MainLayout from "../layouts/MainLayout.vue";

const routes = [
    {
        path: "/",
        name: "main",
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('../pages/Home.vue'),
                meta: {
                    title: '首页'
                }
            },
            {
                path: 'card-holder',
                name: 'CardHolder',
                component: () => import('../pages/CardHolder.vue'),
                meta: {
                    title: '卡套 - 2024版'
                }
            },
            {
                path: 'custom-card-holder',
                name: 'CustomCardHolder',
                component: () => import('../pages/CustomCardHolder.vue'),
                meta: {
                    title: '卡套 - 2024版 - 客制化'
                }
            },
            {
                path: 'fridge-magnet',
                name: 'FridgeMagnet',
                component: () => import('../pages/FridgeMagnet.vue'),
                meta: {
                    title: '冰箱贴'
                }
            },
            {
                path: 'flyer',
                name: 'Flyer',
                component: () => import('../pages/Flyer.vue'),
                meta: {
                    title: '传单 - 2023版'
                }
            },
            {
                path: 'fan',
                name: 'Fan',
                component: () => import('../pages/Fan.vue'),
                meta: {
                    title: '扇子'
                }
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由守卫，设置页面标题
router.beforeEach((to, _from, next) => {
    document.title = to.meta.title ? `iOS Design - ${to.meta.title}` : 'iOS Design'
    next()
})

export default router