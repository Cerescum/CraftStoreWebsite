import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './components/HomeView.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: HomeView },
    ]    
})