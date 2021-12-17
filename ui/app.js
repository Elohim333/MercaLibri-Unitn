const routes=[
    {path:'/home',component:home},
    {path:'/catalogo',component:catalogo},
    {path:'/chi siamo',component:chi_siamo},
    {path:'/pagina personale',component:pagina_personale},
    {path:'/vendita',component:vendita},
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')