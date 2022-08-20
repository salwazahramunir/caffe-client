<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import { useKitchenStore } from '@/stores/kitchenStore'
import { useRawMaterialStore } from '@/stores/rawMaterialStore'

export default {
    data() {
        return {
            dataRawMaterial: {
                kitchen_store_id: '0'
            }
        }
    },
    computed: {
        ...mapState(useKitchenStore, ["kitchenStores"])
    },
    methods: {
        ...mapActions(useKitchenStore, ["readAllKitchenStore"]),
        ...mapActions(useRawMaterialStore, ["addRawMaterial"]),
        create() {
            this.addRawMaterial(this.dataRawMaterial)
        }
    },
    created() {
        this.readAllKitchenStore()
    }
}
</script>
<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Form Add Raw Material</h4>
                        <p class="card-description">
                            Form Add Raw Material
                        </p>
                        <form class="forms-sample" @submit.prevent="create">
                            <div class="form-group">
                                <label for="kitchen_store_id">Product</label>
                                <select class="form-control" id="role" v-model="dataRawMaterial.kitchen_store_id"
                                    style="color: black">
                                    <option value="0" disabled>--- Select One ---</option>
                                    <option v-for="(kitchenStore, idx) in kitchenStores" :value="kitchenStore.id"
                                        :key="idx">{{ kitchenStore.name }}</option>
                                </select>
                            </div>
                            <RouterLink to="/raw-materials" class="btn btn-outline-primary">Cancel</RouterLink>
                            <button type="submit" class="btn btn-primary ml-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
