import { defineStore } from 'pinia'
import axiosInstance from '@/api/axiosInstance.js'
import Swal from 'sweetalert2'

export const useMenuStore = defineStore({
    id: 'menuStore',
    state: () => ({
        menus: {},
        theadMenu: ["Name", "Price", "Category", "Avaiable"],
        actionMenu: ["show", "edit", "delete"],
        menuById: {}
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
        async readAllMenu() {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/menus",
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })

                this.menus = data.menus
            } catch (error) {
                this.alertError(error)
            }
        },
        async addMenu(obj) {
            try {
                const { data } = await axiosInstance({
                    method: "POST",
                    url: "/menus",
                    headers: {
                        access_token: localStorage.access_token
                    },
                    data: {
                        name: obj.name,
                        price: obj.price,
                        category: obj.category,
                        isConcoction: obj.isConcoction,
                        isAvaiable: obj.isAvaiable,
                        recipes: obj.recipes
                    }
                })

                this.router.push({ name: "menus" })
                this.alertSuccess(data)
            } catch (error) {
                this.alertError(error)
            }
        },
        async editMenuById(id) {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: `/menus/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.menuById = data.menu
                this.router.push({ name: "editMenu", params: { id }})
            } catch (error) {
                this.alertError(error)
            }
        },
        async UpdateMenu(id, obj) {
            try {
                const { data } = await axiosInstance({
                    method: "PUT",
                    url: `/menus/${id}`,
                    headers: { access_token: localStorage.access_token },
                    data: {
                        name: obj.name,
                        price: obj.price,
                        category: obj.category,
                        isConcoction: obj.isConcoction,
                        isAvaiable: obj.isAvaiable,
                        recipes: obj.recipes
                    }
                })

                this.router.push({ name: "menus" })
                this.alertSuccess(data)
            } catch (error) {
                this.alertError(error)
            }
        },
        async showMenu(id) {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: `/menus/${id}`,
                    headers: {
                        access_token: localStorage.access_token
                    }
                })

                this.menuById = data.menu
                this.router.push({ name: "showMenu", params: { id }})
            } catch (error) {
                this.alertError(error)
            }
        },
    }
})
