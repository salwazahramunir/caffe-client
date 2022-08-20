<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import { useKitchenStore } from '@/stores/kitchenStore'

export default {
    data() {
        return {
            fullPath: '',
            title: '',
            description: '',
            dataKitchenStore: {
                name: '',
                stock: '',
                quantity: '',
                unit: 'Mililiter'
            }
        }
    },
    watch: {
        "$route.fullPath"(value) {
            if (value === "/kicthen-stores/create") {
                const { fullPath } = this.$route
                this.dataKitchenStore = {
                    name: '',
                    stock: '',
                    quantity: '',
                    unit: '0'
                }

                this.title = "Form Add Kitchen Store"
                this.description = "Form Add Kitchen Store"
                this.fullPath = fullPath
            }
        }
    },
    computed: {
        ...mapState(useKitchenStore, ["userById"])
    },
    methods: {
        ...mapActions(useKitchenStore, ["addKitchenStore"]),
        createUpdate() {
            if (this.fullPath === "/kitchen-stores/create") {
                this.addKitchenStore(this.dataKitchenStore)
            }
        }
    },
    created() {
        const { fullPath } = this.$route
        this.fullPath = fullPath

        if (this.fullPath === "/kitchen-stores/create") {
            this.title = "Form Add Kitchen Store"
            this.description = "Form Add Kitchen Store"
        } else {
            this.title = "Form Edit Kitchen Store"
            this.description = "Form Edit Kitchen Store"

            this.dataKitchenStore.name = this.userById.name
            this.dataKitchenStore.stock = this.userById.stock
            this.dataKitchenStore.unit = this.userById.unit
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
                                <label for="name">Name</label>
                                <input type="text" v-model="dataKitchenStore.name" class="form-control" id="name"
                                    placeholder="name">
                            </div>
                            <div class="form-group">
                                <label for="stock">Stock</label>
                                <input type="number" v-model="dataKitchenStore.stock" class="form-control" id="stock"
                                    placeholder="stock">
                            </div>
                            <div class="form-group">
                                <label for="quantity">Quantity</label>
                                <input type="number" v-model="dataKitchenStore.quantity" class="form-control"
                                    id="quantity" placeholder="quantity">
                                <small style="color: red">enter quantity data in milliliters</small>
                            </div>
                            <div class="form-group">
                                <label for="unit">unit</label>
                                <input type="text" v-model="dataKitchenStore.unit" class="form-control" id="unit"
                                    placeholder="unit" disabled>
                            </div>
                            <RouterLink to="/kitchen-stores" class="btn btn-outline-primary">Cancel</RouterLink>
                            <button type="submit" class="btn btn-primary ml-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
