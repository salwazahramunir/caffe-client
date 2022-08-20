import { defineStore } from 'pinia'
import axiosInstance from '@/api/axiosInstance.js'
import Swal from 'sweetalert2'

export const useKitchenStore = defineStore({
    id: 'kitchenStore',
    state: () => ({
        kitchenStores: {},
        theadKitchenStore: ["Name", "Stock", "Quantity", "Unit"],
        actionKitchenStore: ["show", "edit", "delete"],
        kitchenStoreById: {}
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
        async readAllKitchenStore() {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/kitchen-stores",
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })

                this.kitchenStores = data.kitchenStore
            } catch (error) {
                this.alertError(error)
            }
        }
    }
})
