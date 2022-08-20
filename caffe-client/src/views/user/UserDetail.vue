<script>
import { mapState } from 'pinia'
import { useUserStore } from '@/stores/userStore'
import { RouterLink } from 'vue-router'

export default {
    computed: {
        ...mapState(useUserStore, ["userById"])
    }
}
</script>
<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">User Detail</h4>
                        <p class="card-description">
                            User Detail
                        </p>

                        <div class="row mt-5">
                            <div class="col-md-4">
                                <img src="@/assets/images/noImage.png" alt="" class="mb-5">
                            </div>
                            <div class="col-md-4">
                                <h3 class="mb-4">Account</h3>
                                <div>
                                    <h6><b>Username</b></h6>
                                    <p>{{ userById.username }}</p>
                                </div>
                                <div>
                                    <h6><b>E-mail Address</b></h6>
                                    <p>{{ userById.email }}</p>
                                </div>
                                <div>
                                    <h6><b>Role</b></h6>
                                    <p>{{ userById.role }}</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <h3 class="mb-4">Profile</h3>
                                <div>
                                    <h6><b>Full Name</b></h6>
                                    <p v-if="userById.Profile.fullName">{{ userById.Profile.fullName }}</p>
                                    <p v-else>-</p>
                                </div>
                                <div>
                                    <h6><b>Gender</b></h6>
                                    <p v-if="userById.Profile.gender">{{ userById.Profile.gender }}</p>
                                    <p v-else>-</p>
                                </div>
                                <div>
                                    <h6><b>Date Of Birth</b></h6>
                                    <p v-if="userById.Profile.dateOfBirth">{{ userById.Profile.dateOfBirth }}</p>
                                    <p v-else>-</p>
                                </div>
                                <div>
                                    <h6><b>Phone Number</b></h6>
                                    <p v-if="userById.Profile.phoneNumber">{{ userById.Profile.phoneNumber }}</p>
                                    <p v-else>-</p>
                                </div>
                            </div>
                        </div>
                        <RouterLink to="/users" class="btn btn-outline-primary">Cancel</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
