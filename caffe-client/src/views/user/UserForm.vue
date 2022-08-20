<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

export default {
    data() {
        return {
            fullPath: '',
            title: '',
            description: '',
            dataUser: {
                username: '',
                email: '',
                password: '',
                role: '0'
            }
        }
    },
    watch: {
        "$route.fullPath"(value) {
            if (value === "/users/create") {
                const { fullPath } = this.$route
                this.dataUser = {
                    username: '',
                    email: '',
                    password: '',
                    role: '0'
                }

                this.title = "Form Add User"
                this.description = "Form Add User"
                this.fullPath = fullPath
            }
        }
    },
    computed: {
        ...mapState(useUserStore, ["userById"])
    },
    methods: {
        ...mapActions(useUserStore, ["addUser", "updateUser"]),
        createUpdate() {
            if (this.fullPath === "/users/create") {
                this.addUser(this.dataUser)
            } else {
                this.updateUser(this.userById.id, this.dataUser)
            }
        }
    },
    created() {
        const { fullPath } = this.$route
        this.fullPath = fullPath

        if (this.fullPath === "/users/create") {
            this.title = "Form Add User"
            this.description = "Form Add User"
        } else {
            this.title = "Form Edit User"
            this.description = "Form Edit User"

            this.dataUser.username = this.userById.username
            this.dataUser.email = this.userById.email
            this.dataUser.role = this.userById.role
        }
    }
}
</script>
<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{{ title }}</h4>
                        <p class="card-description">
                            {{ description }}
                        </p>
                        <form class="forms-sample" @submit.prevent="createUpdate">
                            <div class="form-group">
                                <label for="username">Username</label>
                                <input type="text" v-model="dataUser.username" class="form-control" id="username"
                                    placeholder="Username">
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input type="email" v-model="dataUser.email" class="form-control" id="email"
                                    placeholder="Email Address">
                            </div>
                            <div class="form-group">
                                <label for="password">Password</label>
                                <input type="password" v-model="dataUser.password" class="form-control" id="password"
                                    placeholder="Password">
                                <small v-if="fullPath !== '/users/create'" style="color: red">leave it blank if you
                                    don't want to change the
                                    password</small>
                            </div>
                            <div class="form-group">
                                <label for="role">Role</label>
                                <select class="form-control" id="role" v-model="dataUser.role" style="color: black">
                                    <option value="0" disabled>--- Select One ---</option>
                                    <option value="Owner">Owner</option>
                                    <option value="Admin">Admin</option>
                                    <option value="Cashier">Cashier</option>
                                </select>
                            </div>
                            <RouterLink to="/users" class="btn btn-outline-primary">Cancel</RouterLink>
                            <button type="submit" class="btn btn-primary ml-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
