import { defineStore } from 'pinia'
import axiosInstance from '@/api/axiosInstance.js'

export const useUserStore = defineStore({
    id: 'userStore',
    state: () => ({
        users: {},
        theadUser: ["Username", "Email Address", "Role"],
        actionUser: ["show", "edit", "delete"]
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
        }
    }
})
