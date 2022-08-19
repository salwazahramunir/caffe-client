<script>
import { mapActions } from 'pinia'
import { useAuthStore } from '@/stores/authStore.js'

export default {
    data() {
        return {
            dataLogin: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useAuthStore, ["login"]),
        handleLogin() {
            this.login(this.dataLogin)
        }
    }
}
</script>
<template>
    <div class="container-scroller">
        <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center auth px-0">
                <div class="row w-100 mx-0">
                    <div class="col-lg-4 mx-auto">
                        <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                            <div class="mb-4 text-center">
                                <h3>CAFFE NAME</h3>
                            </div>
                            <h4>Hello! let's get started</h4>
                            <h6 class="font-weight-light">Sign in to continue.</h6>
                            <form class="pt-3" @submit.prevent="handleLogin">
                                <div class="form-group">
                                    <input type="email" v-model="dataLogin.email" class="form-control form-control-lg"
                                        id="email" placeholder="E-mail Address">
                                </div>
                                <div class="form-group">
                                    <input type="password" v-model="dataLogin.password"
                                        class="form-control form-control-lg" id="password" placeholder="Password">
                                </div>
                                <div class="mt-3">
                                    <button type="submit"
                                        class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN
                                        IN</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- content-wrapper ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
    <!-- container-scroller -->
</template>
