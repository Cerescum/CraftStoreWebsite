<template>
    <Header/>
    <section class="mt-24">

        <form action="" class="w-16">
            <input type="range" name="" id="">
        </form>
    </section>
    <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'ProductList',
    components: {
        Header, Footer
    }
}
</script>

<style>
    input[type=range] {
    height: 24px;
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
    }
    input[type=range]:focus {
    outline: none;
    }
    input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    background: #D18688;
    border-radius: 50px;
        }
    input[type=range]::-webkit-slider-thumb {
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #9E402C;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
    background: #D18688;
    }
    input[type=range]::-moz-range-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    background: #D18688;
    border-radius: 50px;
    }
    input[type=range]::-moz-range-thumb {
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #9E402C;
    cursor: pointer;
    }
    input[type=range]::-ms-track {
    width: 100%;
    height: 6px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
    }
    input[type=range]::-ms-fill-lower {
    background: #D18688;
    border-radius: 100px;
    }
    input[type=range]::-ms-fill-upper {
    background: #D18688;
    border-radius: 100px;
    }
    input[type=range]::-ms-thumb {
    margin-top: 1px;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #9E402C;
    cursor: pointer;
    }
    input[type=range]:focus::-ms-fill-lower {
    background: #D18688;
    }
    input[type=range]:focus::-ms-fill-upper {
    background: #D18688;
    }
</style>