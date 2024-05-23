<template>
    <Header/>
    <section class="w-3/5 py-40 align-items-center" style="margin: 0 auto">
        <h2 class="text-center">Check out</h2>
        <a href="" class="text-primary d-flex justify-content-center">Cancel</a>
        <form action="">
    </form>

        <div class="w-100 mt-24">
            <form action="" class="">
                <input type="text" id="customer-email" autocomplete="given-name" class="w-full rounded-md border-0 text-gray-900 p-2 ring-yellow-100 bg-light focus:outline-none border-bottom" placeholder="email">
                <div class="d-flex gap-3">
                    <span class="col-6">
                        <input type="text" id="customer-name" autocomplete="given-name" class="w-full rounded-md border-0 text-gray-900 p-2 ring-yellow-100 bg-light focus:outline-none border-bottom mt-3" placeholder="name">
                        <input type="text" id="customer-surname" autocomplete="given-name" class="w-full rounded-md border-0 text-gray-900 p-2 ring-yellow-100 bg-light focus:outline-none border-bottom mt-3" placeholder="surname">
                        <input type="text" id="customer-phone" autocomplete="given-name" class="w-full rounded-md border-0 text-gray-900 p-2 ring-yellow-100 bg-light focus:outline-none border-bottom mt-3" placeholder="phone nr.">
                        <input type="text" id="customer-city" autocomplete="given-name" class="w-full rounded-md border-0 text-gray-900 p-2 ring-yellow-100 bg-light focus:outline-none border-bottom mt-3" placeholder="city">
                    </span>
                    <span  class="col-6">
                        <div>
                            <span class="d-flex flex-wrap justify-content-between gap-3 mt-4">
                                <button class="btn btn-outline-pink w-45">delivery cash</button>
                                <button class="btn btn-outline-pink w-45">online payment</button>
                                <button class="btn btn-outline-pink w-45">bank transfer</button>
                                <button class="btn btn-outline-pink w-45">delivery card</button>
                            </span>
                            <span class="d-flex flex-wrap gap-3 justify-content-between mt-3">
                                <button class="btn btn-outline-warning w-45">home delivery</button>
                                <button class="btn btn-outline-warning w-45">post office</button>
                            </span>
                        </div>
                        <button class="p-2 bg-primary w-100 text-light mt-3 rounded-sm">pay now</button>
                    </span>
                </div>
            </form>
        </div>
    </section>
    <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Checkout',
    components: {
        Header, Footer
    }
}
</script>

<style>
    .btn-outline-pink{
        outline: solid #D18688 !important;
    }
    .btn-outline-warning{
        outline: solid #E4C89C !important;
    }
    .w-45{
        width: 45%;
    }

</style>
