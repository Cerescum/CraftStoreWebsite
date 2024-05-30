<template>
    <Header/>
    <section class="mx-6 sm:m-0 sm:gap-20 my-24 sm:my-40 sm:flex justify-content-center align-items-center">
        <img :src="productImg" alt="" class="sm:w-1/3">

        <div class="sm:w-1/3">
            <h2 class="my-3">{{productName}}</h2>

            <div class="sm:flex justify-content-between gap-16">
                <div class="flex justify-content-around align-items-center sm:block">
                    <h4 class="d-flex text-primary sm:mb-4">$ <span>{{productPrice}}</span></h4>
                    <div>
                        <p class="m-0">Quantity</p>
                        <div class="flex gap-2 p-1 border-primary">
                            <button class="border-none bg-transparent" @click="counter < 20 ? counter++ : counter">+</button>
                            <p class="m-0">{{counter}}</p>
                            <button class="border-none bg-transparent" @click="counter > 0? counter-- : counter">-</button>
                        </div>
                    </div>
                </div>
                <div class="mt-6 sm:mt-0">
                    <form action="">
                        <input type="radio" name="purchase" id="one-time"> <label for="one-time">One time purchase</label> <br>
                        <input type="radio" name="purchase" id="subscribtion"> <label for="subscribtion">Subscribe & delivery every month </label> <br>
                        <small>Subscribe now and get the 10% of discount on every recurring order.</small><br>

                        <button @click="toCart" class="p-2 rounded-sm bg-primary w-100 mt-5 d-flex justify-content-center align-items-middle text-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <g clip-path="url(#clip0_982_323)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.761719 2.25C0.761719 2.05109 0.84119 1.86032 0.982651 1.71967C1.12411 1.57902 1.31597 1.5 1.51603 1.5H3.77896C3.94722 1.50005 4.11063 1.55603 4.24321 1.65904C4.37579 1.76205 4.46992 1.90618 4.51064 2.0685L5.12163 4.5H22.6367C22.7483 4.50007 22.8584 4.52474 22.9592 4.57223C23.06 4.61972 23.149 4.68885 23.2197 4.77465C23.2904 4.86044 23.3411 4.96076 23.3681 5.06838C23.3951 5.176 23.3978 5.28823 23.3759 5.397L21.8673 12.897C21.8343 13.0605 21.7474 13.2085 21.6204 13.3174C21.4933 13.4264 21.3334 13.4901 21.1658 13.4985L6.9893 14.2065L7.42228 16.5H20.3738C20.5738 16.5 20.7657 16.579 20.9072 16.7197C21.0486 16.8603 21.1281 17.0511 21.1281 17.25C21.1281 17.4489 21.0486 17.6397 20.9072 17.7803C20.7657 17.921 20.5738 18 20.3738 18H6.7962C6.62034 17.9998 6.45007 17.9386 6.31481 17.8268C6.17956 17.7151 6.08782 17.5599 6.05547 17.388L3.79405 5.4105L3.1906 3H1.51603C1.31597 3 1.12411 2.92098 0.982651 2.78033C0.84119 2.63968 0.761719 2.44891 0.761719 2.25ZM5.44146 6L6.7087 12.7185L20.5035 12.03L21.7165 6H5.44146ZM8.30482 18C7.5046 18 6.73715 18.3161 6.17131 18.8787C5.60547 19.4413 5.28758 20.2044 5.28758 21C5.28758 21.7956 5.60547 22.5587 6.17131 23.1213C6.73715 23.6839 7.5046 24 8.30482 24C9.10504 24 9.87249 23.6839 10.4383 23.1213C11.0042 22.5587 11.3221 21.7956 11.3221 21C11.3221 20.2044 11.0042 19.4413 10.4383 18.8787C9.87249 18.3161 9.10504 18 8.30482 18ZM18.8652 18C18.0649 18 17.2975 18.3161 16.7317 18.8787C16.1658 19.4413 15.8479 20.2044 15.8479 21C15.8479 21.7956 16.1658 22.5587 16.7317 23.1213C17.2975 23.6839 18.0649 24 18.8652 24C19.6654 24 20.4328 23.6839 20.9987 23.1213C21.5645 22.5587 21.8824 21.7956 21.8824 21C21.8824 20.2044 21.5645 19.4413 20.9987 18.8787C20.4328 18.3161 19.6654 18 18.8652 18ZM8.30482 19.5C7.90471 19.5 7.52099 19.658 7.23806 19.9393C6.95514 20.2206 6.7962 20.6022 6.7962 21C6.7962 21.3978 6.95514 21.7794 7.23806 22.0607C7.52099 22.342 7.90471 22.5 8.30482 22.5C8.70493 22.5 9.08865 22.342 9.37157 22.0607C9.6545 21.7794 9.81344 21.3978 9.81344 21C9.81344 20.6022 9.6545 20.2206 9.37157 19.9393C9.08865 19.658 8.70493 19.5 8.30482 19.5ZM18.8652 19.5C18.465 19.5 18.0813 19.658 17.7984 19.9393C17.5155 20.2206 17.3565 20.6022 17.3565 21C17.3565 21.3978 17.5155 21.7794 17.7984 22.0607C18.0813 22.342 18.465 22.5 18.8652 22.5C19.2653 22.5 19.649 22.342 19.9319 22.0607C20.2148 21.7794 20.3738 21.3978 20.3738 21C20.3738 20.6022 20.2148 20.2206 19.9319 19.9393C19.649 19.658 19.2653 19.5 18.8652 19.5Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_982_323">
      <rect width="24.1379" height="24" fill="white" transform="translate(0.761719)"/>
    </clipPath>
  </defs>
                                </svg>
                                + Add to cart    
                        </button>
                    </form>
                </div>
            </div>

            <p class="p-2 mt-4 border-gray">
                <b>Description:</b> {{productDescription}}
            </p>
        </div>
    </section>
    <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Product',
    components: {
        Header, Footer
    },
    data() {
        return {
            productName: '',
            productId: '',
            productPrice: 0,
            productDescription: '',
            productSale: false,
            productImg: '',
            counter: 1,
        }
    },
    mounted() {
        this.productName = localStorage.getItem('name');
        this.productPrice = parseFloat(localStorage.getItem('price'));
        this.productId = localStorage.getItem('id');
        this.productDescription = localStorage.getItem('descriprion');
        this.productSale = Boolean(localStorage.getItem('sale'));
        this.productImg = localStorage.getItem('img');
    },
    methods: {
        toCart(){
            let existingValue = localStorage.getItem("infoProducts");
            console.log("in toCart");
            if (existingValue === null) {
                existingValue = JSON.stringify([]); // For an array
                console.log("creating");
            }
            let forCart = JSON.parse(existingValue);
            let newValue = [this.productName,this.productImg,this.productPrice,this.counter];
            forCart.push(newValue); // Assuming you're adding to an array
            localStorage.setItem("infoProducts", JSON.stringify(forCart));

            history.pushState({}, null, '/#/cart');
        }
    }
}
</script>

<style>
    .border-gray{
        border-color: rgb(117, 102, 102) !important;
    }
</style>