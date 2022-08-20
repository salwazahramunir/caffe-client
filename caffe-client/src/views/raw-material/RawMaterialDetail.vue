<script>
import { mapState } from 'pinia'
import { useRawMaterialStore } from '@/stores/rawMaterialStore'
import { RouterLink } from 'vue-router'

export default {
    computed: {
        ...mapState(useRawMaterialStore, ["rawMaterialById"])
    }
}
</script>
<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Raw Material Detail</h4>
                        <p class="card-description">
                            Raw Material Detail
                        </p>

                        <div class="row mt-5">
                            <div class="col-md-4">
                                <img src="@/assets/images/noImage.png" alt="" class="mb-5">
                            </div>
                            <div class="col-md-4">
                                <h3 class="mb-4">Raw Material Detail</h3>
                                <div>
                                    <h6><b>Name</b></h6>
                                    <p>{{ rawMaterialById.KitchenStore.name }}</p>
                                </div>
                                <div>
                                    <h6><b>Quantity</b></h6>
                                    <p>
                                        {{ rawMaterialById.quantity }}
                                        {{ rawMaterialById.KitchenStore.unit }}
                                    </p>
                                </div>
                                <div>
                                    <h6><b>Sould Out</b></h6>
                                    <p>
                                        {{ rawMaterialById.souldOut }}
                                    </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <h3 class="mb-4">Item Detail</h3>
                                <div>
                                    <h6><b>Name</b></h6>
                                    <p>{{ rawMaterialById.KitchenStore.name }}</p>
                                </div>
                                <div>
                                    <h6><b>Stock</b></h6>
                                    <p>
                                        {{ rawMaterialById.KitchenStore.stock }}
                                    </p>
                                </div>
                                <div>
                                    <h6><b>Quantity in one item</b></h6>
                                    <p>
                                        {{ rawMaterialById.KitchenStore.quantity }}
                                        {{ rawMaterialById.KitchenStore.unit }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <RouterLink to="/raw-materials" class="btn btn-outline-primary">Cancel</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
