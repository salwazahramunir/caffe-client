import { defineStore } from 'pinia'
import axiosInstance from '@/api/axiosInstance.js'
import Swal from 'sweetalert2'

export const useAuthStore = defineStore({
    id: 'authStore',
    state: () => ({

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
        async login(obj) {
            try {
                const { data } = await axiosInstance({
                    method: "POST",
                    url: "/auths/login",
                    data: {
                        email: obj.email,
                        password: obj.password
                    }
                })

                localStorage.setItem("access_token", data.access_token)
                this.router.push({ name: 'dashboard' })
                this.alertSuccess(data)
                
            } catch (error) {
                this.alertError(error)
            }
        }
    }
})
