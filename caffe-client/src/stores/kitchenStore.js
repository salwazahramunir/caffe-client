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
        },
        async addKitchenStore(obj) {
            try {
                const { data } = await axiosInstance({
                    method: "POST",
                    url: "/kitchen-stores",
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        name: obj.name,
                        quantity: obj.quantity,
                        unit: obj.unit,
                        stock: obj.stock
                    }
                })

                this.router.push({ name: "kitchen-stores" })
                this.alertSuccess(data)
            } catch (error) {
                this.alertError(error)
            }
        },
        async editKitchenStoreById(id) {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: `/kitchen-stores/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.kitchenStoreById = data.kitchenStore
                this.router.push({ name: "editKitchenStore", params: { id }})
            } catch (error) {
                this.alertError(error)
            }
        },
        async updateKitchenStore(id, obj) {
            try {
                const { data } = await axiosInstance({
                    method: "PUT",
                    url: `/kitchen-stores/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        name: obj.name,
                        quantity: obj.quantity,
                        unit: obj.unit,
                        stock: obj.stock
                    }
                })

                this.router.push({ name: "kitchen-stores" })
                this.alertSuccess(data)
            } catch (error) {
                this.alertError(error)
            }
        }
    }
})
