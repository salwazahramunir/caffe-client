import { defineStore } from 'pinia'
import axiosInstance from '@/api/axiosInstance.js'
import Swal from 'sweetalert2'

export const useRawMaterialStore = defineStore({
    id: 'rawMaterialStore',
    state: () => ({
        rawMaterials: {},
        theadRawMaterial: ["Name", "Quantity", "Sould Out"],
        actionRawMaterial: [" ", "edit", "delete"],
        rawMaterialById: {}
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
        async readAllRawMaterial() {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/raw-materials",
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })

                this.rawMaterials = data.rawMaterials
            } catch (error) {
                this.alertError(error)
            }
        }
    }
})
