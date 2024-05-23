import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'
import Cart from './components/Cart.vue'
import Checkout from './components/Checkout.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Product from './components/Product.vue'
import Delivery from './components/Delivery.vue'
import ProductList from './components/ProductList.vue'


export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/cart', component: Cart },
        { path: '/checkout', component: Checkout },
        { path: '/home', component: Home },
        { path: '/login', component: Login },
        { path: '/product', component: Product },
        { path: '/delivery', component: Delivery },
        { path: '/products', component: ProductList }
    ]    
})