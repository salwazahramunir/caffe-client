<script>
import { mapActions } from 'pinia'
import { RouterLink } from 'vue-router'
import { useUserStore } from '@/stores/userStore'

export default {
    props: ["page"],
    data() {
        return {
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
    methods: {
        ...mapActions(useUserStore, ["addUser"]),
        createUpdate() {
            this.addUser(this.dataUser)
        }
    },
    created() {
        if (this.page === 'edit') {
            this.title = "Form Edit User"
            this.description = "Form Edit User"
        } else {
            this.title = "Form Add User"
            this.description = "Form Add User"
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
                            </div>
                            <div class="form-group">
                                <label for="role">Role</label>
                                <select class="form-control" id="role" v-model="dataUser.role">
                                    <option value="0">--- Select One ---</option>
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
