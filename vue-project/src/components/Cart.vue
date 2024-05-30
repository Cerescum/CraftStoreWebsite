<template>
    <Header/>
    
    <section class="w-10/12 py-40 align-items-center" style="margin: 0 auto">
        <h2 class="text-center">Your cart items</h2>
        <a href="" class="text-primary d-flex justify-content-center">Back to shopping</a>

        <div class="mt-24">
            <ul class="list-unstyled d-flex">
                <li class="col-7">Product</li>
                <li class="col-2 text-left">Price</li>
                <li class="col-2">Quantity</li>
                <li class="col-1 text-right">Total</li>
            </ul>
            <hr>
        </div>

        <div v-for="(x,index) in content" class="cart-products py-3 border-bottom border-slate-700 d-flex w-100">
            <img :src="x[1]" alt="" class="w-40 bg-primary col-2">
            <span class="p-4 col-5">
                <h4>{{x[0]}}</h4>
                <a @click="removeItem(index)" class="text-primary">remove</a>
            </span>
            <span class="col-5 d-flex justify-content-between align-items-center">
                <p class="text-left m-0">$ <span class="prod-price">{{x[2]}}</span></p>
                <div class="flex gap-2">
                            <button class="border-none bg-transparent" @click="x[3] < 20 ? x[3]++ : x[3]">+</button>
                            <p class="m-0">{{x[3]}}</p>
                            <button class="border-none bg-transparent" @click="x[3] > 0 ? x[3]-- : x[3]">-</button>
                </div>
                <p class="text-right m-0">$ <span class="prod-total">{{x[2]*x[3]}}</span></p>
            </span>
        </div>

        <div class="d-flex gap-5 justify-content-end mt-5 align-items-center">
            <span class="d-flex gap-4">
                <p class="m-0">subtotal</p>
                <p class="m-0">$ <span>{{ sum }}</span></p>
            </span>
            <button class="btn btn-primary">
                <a href="/#/checkout" class="text-light no-underline">
                    Check-out
                </a>
            </button>
        </div>

    </section>
    <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Cart',
    components: {
        Header, Footer
    },
    data() {
        return {
            content: [],
            sum: 0,
        }
    },
    mounted(){
        this.content = JSON.parse(localStorage.getItem('infoProducts'));
        this.$nextTick(() => {
            this.subtotal();
        })
    },
    methods: {
        removeItem(i){
            document.querySelectorAll('.cart-products')[i].remove();
            this.subtotal();
            content.splice(i, 1);
            localStorage.setItem("infoProducts", JSON.stringify(content));
        },
        subtotal() {
            this.sum = 0;
            const elements = Array.from(document.querySelectorAll('.prod-total'));
            for (let i=0; i<elements.length; i++) {
                let number = parseFloat(elements[i].textContent.trim());
                this.sum += number;
            }   
        }
    }
}
</script>

<style>
</style>