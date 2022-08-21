import { defineStore } from 'pinia'
import axiosInstance from '@/api/axiosInstance.js'
import Swal from 'sweetalert2'

export const useRoomStore = defineStore({
    id: 'roomStore',
    state: () => ({
        rooms: {},
        theadRoom: ["Code Room", "Name Room", "Category", "Avaiable"],
        actionRoom: ["show", "edit", "delete"],
        roomById: {}
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
        async readAllRoom() {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/rooms",
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })

                this.rooms = data.rooms
            } catch (error) {
                this.alertError(error)
            }
        },
    }
})
