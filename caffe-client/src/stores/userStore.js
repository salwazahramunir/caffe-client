import { defineStore } from 'pinia'
import axiosInstance from '@/api/axiosInstance.js'
import Swal from 'sweetalert2'

export const useUserStore = defineStore({
    id: 'userStore',
    state: () => ({
        users: {},
        theadUser: ["Username", "Email Address", "Role"],
        actionUser: ["show", "edit", "delete"],
        userById: {}
    }),
    getters: {
    },
    actions: {
        toast() {
            return Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
        },
        alertSuccess(data) {
            this.toast().fire({
                icon: 'success',
                title: data.message
            })
        },
        alertError(error) {
            this.toast().fire({
                icon: 'error',
                title: error.response.data.message
            })
        },
        async readAllUser() {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/users",
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })

                this.users = data.users
            } catch (error) {
                this.alertError(error)
            }
        },
        async addUser(obj) {
            try {
                const { data } = await axiosInstance({
                    method: "POST",
                    url: "/users",
                    headers: {
                        access_token: localStorage.access_token,
                    },
                    data: {
                        username: obj.username,
                        email: obj.email,
                        password: obj.password,
                        role: obj.role
                    }
                })

                this.router.push({ name: "users" })
                this.alertSuccess(data)
            } catch (error) {
                this.alertError(error)
            }
        },
        async editUserById(id) {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: `/users/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.userById = data.user
                this.router.push({ name: "editUser", params: { id }})
            } catch (error) {
                this.alertError(error)
            }
        },
        async updateUser(id, obj) {
            try {
                const { data } = await axiosInstance({
                    method: "PUT",
                    url: `/users/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        username: obj.username,
                        email: obj.email,
                        password: obj.password,
                        role: obj.role
                    }
                })

                this.router.push({ name: "users" })
                this.alertSuccess(data)
            } catch (error) {
                this.alertError(error)
            }
        },
        async showUser(id) {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: `/users/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.userById = data.user
                this.router.push({ name: "showUser", params: { id }})
            } catch (error) {
                this.alertError(error)
            }
        },
        async deleteUser(id) {
            try {
                const { data } = await axiosInstance({
                    method: "DELETE",
                    url: `/users/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.router.push({ name: "users" })
                this.readAllUser()
                this.alertSuccess(data)
            } catch (error) {
                this.alertError(error)
            }
        }
    }
})
