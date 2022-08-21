<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import { useRoomStore } from '@/stores/roomstore'

export default {
    data() {
        return {
            fullPath: '',
            title: '',
            description: '',
            dataRoom: {
                codeRoom: '',
                nameRoom: '',
                category: '0',
                price: '',
                duration: '',
                isEmpty: 'true'
            }
        }
    },
    watch: {
        "$route.fullPath"(value) {
            if (value === "/rooms/create") {
                const { fullPath } = this.$route
                this.dataRoom = {
                    codeRoom: '',
                    nameRoom: '',
                    category: '0',
                    price: '',
                    duration: '',
                    isEmpty: 'true'
                }

                this.title = "Form Add Room"
                this.description = "Form Add Room"
                this.fullPath = fullPath
            }
        }
    },
    computed: {
        ...mapState(useRoomStore, ["roomById"])
    },
    methods: {
        ...mapActions(useRoomStore, ["addRoom", "updateRoom"]),
        createUpdate() {
            if (this.fullPath === "/rooms/create") {
                this.addRoom(this.dataRoom)
            } else {
                this.updateRoom(this.roomById.id, this.dataRoom)
            }
        }
    },
    created() {
        const { fullPath } = this.$route
        this.fullPath = fullPath

        if (this.fullPath === "/rooms/create") {
            this.title = "Form Add Room"
            this.description = "Form Add Room"
        } else {
            this.title = "Form Edit Room"
            this.description = "Form Edit Room"

            this.dataRoom.codeRoom = this.roomById.codeRoom
            this.dataRoom.nameRoom = this.roomById.nameRoom
            this.dataRoom.price = this.roomById.price
            this.dataRoom.duration = this.roomById.duration
            this.dataRoom.category = this.roomById.category
            this.dataRoom.isEmpty = this.roomById.isEmpty
        }
    }
}
</script>
<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">{{ title }}</h4>
                        <p class="card-description">
                            {{ description }}
                        </p>
                        <form class="forms-sample" @submit.prevent="createUpdate">
                            <div class="form-group">
                                <label for="codeRoom">Code Room</label>
                                <input type="text" v-model="dataRoom.codeRoom" class="form-control" id="codeRoom"
                                    placeholder="code room">
                            </div>
                            <div class="form-group">
                                <label for="nameRoom">Name Room</label>
                                <input type="text" v-model="dataRoom.nameRoom" class="form-control" id="nameRoom"
                                    placeholder="name room">
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input type="number" v-model="dataRoom.price" class="form-control" id="price"
                                    placeholder="price">
                            </div>
                            <div class="form-group">
                                <label for="duration">Duration</label>
                                <input type="number" v-model="dataRoom.duration" class="form-control" id="duration"
                                    placeholder="duration">
                                <small style="color: red">enter duration in minutes</small>
                            </div>
                            <div class="form-group">
                                <label for="category">category</label>
                                <select class="form-control" id="category" v-model="dataRoom.category"
                                    style="color: black">
                                    <option value="0" disabled>--- Select One ---</option>
                                    <option value="Karaoke">Karaoke</option>
                                    <option value="Bilyard">Bilyard</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="isEmpty">Empty</label>
                                <select class="form-control" id="isEmpty" v-model="dataRoom.isEmpty"
                                    style="color: black">
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <RouterLink to="/rooms" class="btn btn-outline-primary">Cancel</RouterLink>
                            <button type="submit" class="btn btn-primary ml-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
