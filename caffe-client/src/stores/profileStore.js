import { defineStore } from 'pinia'
import axiosInstance from '@/api/axiosInstance.js'

export const useProfileStore = defineStore({
    id: 'profileStore',
    state: () => ({
        profileUser: {}
    }),
    getters: {
    },
    actions: {
        async profileUserLogin() {
            try {
                const { data } = await axiosInstance({
                    method: "GET",
                    url: "/users/show-profile",
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })

                this.profileUser = data.user
                console.log(data);
            } catch (error) {
                this.alertError(error)
            }
        }
    }
})
