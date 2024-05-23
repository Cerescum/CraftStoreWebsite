<template>
    <Header/>
    <section class="d-flex justify-content-center gap-5 min-w-screen-md my-40">
        <div class="w-80">
            <h2 class="text-uppercase text-center mb-5">log in</h2>
            <div class="form-floating mt-3 mb-3">
                <input type="mail" class="form-control" id="email" placeholder="Enter email" name="mail">
                <label for="pwd">Email</label>
            </div>
            <div class="form-floating mt-3 mb-3">
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                <label for="pwd">Password</label>
            </div>
            <button class="btn btn-primary w-100 p-3 mt-4">log back in</button>
        </div>
        
        <div class="mx-5 d-flex flex-column justify-content-center items-center">
            <hr class="bg-primary w-px h-36">
            <p>or</p>
            <hr class="bg-primary w-px h-36">
        </div>
        
        <div class="w-80">
            <h2 class="text-uppercase text-center mb-5">sign in</h2>
            <div class="form-floating mt-3 mb-3">
                <input type="mail" class="form-control" id="email" placeholder="Enter email" name="mail">
                <label for="pwd">Email*</label>
            </div>
            <div class="form-floating mt-3 mb-3">
                <input type="text" class="form-control" id="email" placeholder="Enter email" name="mail">
                <label for="pwd">Name*</label>
            </div>
            <div class="form-floating mt-3 mb-3">
                <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd">
                <label for="pwd">Set password*</label>
            </div>
            <button class="btn btn-primary w-100 p-3 mt-4">sign in</button>
        </div>
    </section>
    <Footer/>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'Login',
    components: {
        Header, Footer
    }
}
</script>

<style>
</style>