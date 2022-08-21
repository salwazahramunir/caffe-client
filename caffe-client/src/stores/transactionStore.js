import { defineStore } from 'pinia'
import axiosInstance from '@/api/axiosInstance.js'
import Swal from 'sweetalert2'

export const useTransactionStore = defineStore({
    id: 'transactionStore',
    state: () => ({
        transactions: {},
        theadTransaction: ["Invoice", "Customer Name", "Total Bill", "Date"],
        actionTransaction: ["show", "edit", "delete"],
        transactionById: {}
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
        async readAllTransaction() {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/transactions",
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })

                this.transactions = data.transactions
            } catch (error) {
                this.alertError(error)
            }
        }
    }
})
