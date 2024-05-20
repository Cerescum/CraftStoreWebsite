<template>
    <Header />
    <!-- <Home />  -->
    <!-- <Login /> -->
    <Product />
    <Footer />
  </template>
  
  <script>
  import Header from "@/components/Header.vue";
  import Home from "@/components/Home.vue";
  import Login from '@/components/Login.vue';
  import Product from '@/components/Product.vue'
  import Footer from "@/components/Footer.vue";
  
  export default {
    components: {
      Header,
      Home,
      Login,
      Product,
      Footer
    }
  };
  </script>
  
  <style>

  </style>
  