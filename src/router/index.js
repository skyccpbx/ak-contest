import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/cosplay',
        name: 'CosplayAbout',
        component: () => import(/* webpackChunkName: "CosplayAbout" */ '@/views/CosplayAbout.vue'),
        meta: { isNav: true },
    },
    {
        path: '/illustration',
        name: 'Illustration',
        component: () => import(/* webpackChunkName: "Illustration" */ '@/views/Illustration.vue'),
        meta: { isNav: true },
    },
    {
        path: '/:GroupID/vote',
        name: 'Vote',
        component: () => import(/* webpackChunkName: "cosplayVote" */ '@/views/Vote.vue'),
        meta: { isNav: true, title: '作品展示' },
        params: {
            GroupID: '',
        },
    },
    {
        path: '/:GroupID/vote/:id',
        name: 'Item',
        component: () => import(/* webpackChunkName: "Item" */ '@/views/Item.vue'),
        meta: { isNav: true },
        // params: {
        //     VoteItems: [],
        //     index: '2',
        // },
    },
    {
        path: '/works',
        name: 'Works',
        component: () => import(/* webpackChunkName: "Works" */ '@/views/Works.vue'),
        meta: { isNav: true },
    },
]

const router = new VueRouter({
    mode: 'history',
    base: '/artcombat_demo/',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return { x: 0, y: 0 } //savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
})

export default router
