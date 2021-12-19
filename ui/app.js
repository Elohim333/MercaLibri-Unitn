const routes=[
    {path:'/home',component:home},
    {path:'/catalogo',component:catalogo},
    {path:'/chi siamo',component:chi_siamo},
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')