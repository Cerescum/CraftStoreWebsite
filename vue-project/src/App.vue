<template>
<router-view></router-view>

</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Product from './components/Product.vue'
import Cart from './components/Cart.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Home,
    Login,
    Product,
    Cart,
    Footer
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  body {
        font-family: 'Inter', sans-serif !important;
        font-weight: 200;
    }
    .text-warning{
        color: #E4C89C !important;
    }
    .bg-warning{
        background-color: #E4C89C !important;
    }
    .border-warning-30{
      border: 1px solid rgba(228, 200, 156, 0.5) !important;
    }
    .text-dark{
        color: #272727 !important;
    }
    .bg-dark{
        background-color: #272727 !important;
    }
    .text-light{
        color: #FBF9F9 !important;
    }
    .bg-light{
        background-color: #FBF9F9 !important;
    }
    .text-primary{
        color: #96402C !important;
    }
    .bg-primary{
        background-color: #9E402C !important;
    }
    .btn-primary{
        background-color: #9E402C;
        border: none;
        border-radius: 4px;
    }
    .btn-outline-primary{
        background-color: none !important;
        outline: #9E402C !important;
    }
</style>
