<script>
import { mapActions, mapState } from 'pinia'
import { useAuthStore } from '@/stores/authStore.js'
import { useProfileStore } from '@/stores/profileStore.js'

export default {
    computed: {
        ...mapState(useProfileStore, ["profileUser"])
    },
    methods: {
        ...mapActions(useAuthStore, ["logout"]),
        ...mapActions(useProfileStore, ["profileUserLogin"]),
        handleLogout() {
            this.logout()
        }
    },
    created() {
        this.profileUserLogin()
    }
}
</script>
<template>
    <!-- partial:partials/_navbar.html -->
    <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a class="navbar-brand brand-logo mr-5" href="index.html">CAFFE NAME</a>
            <a class="navbar-brand brand-logo-mini" href="index.html">CN</a>
        </div>
        <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                <span class="icon-menu"></span>
            </button>
            <ul class="navbar-nav navbar-nav-right">
                <li class="nav-item nav-profile dropdown">
                    <div class="d-flex">
                        <div class="text-end m-3">
                            <h6 id="username" class="mb-0 text-gray-600">{{ profileUser.username }}
                            </h6>
                            <p class="mb-0 text-sm text-gray-600" id="role">{{ profileUser.role }}
                            </p>
                        </div>
                    </div>
                    <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                        <img src="@/assets/images/faces/face28.jpg" alt="profile" />
                    </a>
                    <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                        <a class="dropdown-item">
                            <i class="ti-settings text-primary"></i>
                            Settings
                        </a>
                        <a class="dropdown-item" @click.prevent="handleLogout">
                            <i class="ti-power-off text-primary"></i>
                            Logout
                        </a>
                    </div>
                </li>
            </ul>
            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                data-toggle="offcanvas">
                <span class="icon-menu"></span>
            </button>
        </div>
    </nav>
</template>