import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: import('../pages/Home.vue')
    },
    {
        path: '/card-holder',
        name: 'CardHolder',
        component: import('../pages/CardHolder.vue')
    },
    {
        path: '/fridge-magnet',
        name: 'FridgeMagnet',
        component: import('../pages/FridgeMagnet.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router