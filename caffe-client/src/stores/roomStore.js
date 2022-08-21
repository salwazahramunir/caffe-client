import { defineStore } from 'pinia'
import axiosInstance from '@/api/axiosInstance.js'
import Swal from 'sweetalert2'

export const useRoomStore = defineStore({
    id: 'roomStore',
    state: () => ({
        rooms: {},
        theadRoom: ["Code Room", "Name Room", "Category", "Empty"],
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
        async addRoom(obj) {
            try {
                const { data } = await axiosInstance({
                    method: "POST",
                    url: "/rooms",
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        codeRoom: obj.codeRoom,
                        nameRoom: obj.nameRoom,
                        category: obj.category,
                        price: obj.price,
                        duration: obj.duration
                    }
                })

                this.router.push({ name: "rooms" })
                this.alertSuccess(data)
            } catch (error) {
                this.alertError(error)
            }
        },
        async editRoomById(id) {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: `/rooms/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.roomById = data.room
                this.router.push({ name: "editRoom", params: { id }})
            } catch (error) {
                this.alertError(error)
            }
        },
        async updateRoom(id, obj) {
            try {
                const { data } = await axiosInstance({
                    method: "PUT",
                    url: `/rooms/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        codeRoom: obj.codeRoom,
                        nameRoom: obj.nameRoom,
                        category: obj.category,
                        price: obj.price,
                        duration: obj.duration,
                        isEmpty: obj.isEmpty
                    }
                })

                this.router.push({ name: "rooms" })
                this.alertSuccess(data)
            } catch (error) {
                this.alertError(error)
            }
        },
        async showRoom(id) {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: `/rooms/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.roomById = data.room
                this.router.push({ name: "showRoom", params: { id }})
            } catch (error) {
                this.alertError(error)
            }
        },
    }
})
