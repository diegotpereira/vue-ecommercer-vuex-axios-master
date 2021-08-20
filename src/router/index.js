import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const routes = [{
        path: '/',
        component: () =>
            import ('../layouts/Base.vue'),

        children: [{
                path: '',
                component: () =>
                    import ('../views/home/Produtos.vue')
            },
            {
                path: 'detalhes/:idProduto',
                component: () =>
                    import ('../views/home/Detalhes.vue')
            },
            {
                path: 'carrinho',
                component: () =>
                    import ('../views/home/Carrinho.vue')
            }
        ]
    },
    {
        path: '/login',
        component: () =>
            import ('../views/conta/Login.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router