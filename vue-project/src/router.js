import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'
import Cart from './components/Cart.vue'
import Checkout from './components/Checkout.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Product from './components/Product.vue'
import Delivery from './components/Delivery.vue'
import Accessories from './components/accesories.vue'
import ArtHobbies from './components/art&hobbies.vue'
import OfficeSupplies from './components/office-supplies.vue'
import PaperArticles from './components/paper-articles.vue'
import SchoolSupplies from './components/school-supplies.vue'
import Writing from './components/writing.vue'


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
        { path: '/products/accesories', component: Accessories },
        { path: '/products/art&hobbies', component: ArtHobbies },
        { path: '/products/office-supplies', component: OfficeSupplies },
        { path: '/products/paper-articles', component: PaperArticles },
        { path: '/products/school-supplies', component: SchoolSupplies },
        { path: '/products/writing', component: Writing }
    ]    
})