<script>
import { mapState } from 'pinia'
import { useMenuStore } from '@/stores/menuStore'
import { RouterLink } from 'vue-router'

export default {
    computed: {
        ...mapState(useMenuStore, ["menuById"])
    }
}
</script>
<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Menu Detail</h4>
                        <p class="card-description">
                            Menu Detail
                        </p>

                        <div class="row mt-5">
                            <div class="col-md-3">
                                <img src="@/assets/images/noImage.png" alt="" class="mb-5">
                            </div>
                            <div class="col-md-4 pl-5">
                                <h3 class="mb-4">Menu Detail</h3>
                                <div>
                                    <h6><b>Name</b></h6>
                                    <p>{{ menuById.name }}</p>
                                </div>
                                <div>
                                    <h6><b>Price</b></h6>
                                    <p>{{ menuById.price }}</p>
                                </div>
                                <div>
                                    <h6><b>Category</b></h6>
                                    <p>{{ menuById.category }}</p>
                                </div>
                                <div>
                                    <h6><b>Concoction</b></h6>
                                    <p>{{ menuById.isConcoction }}</p>
                                </div>
                                <div>
                                    <h6><b>Avaiable</b></h6>
                                    <p>{{ menuById.isAvaiable }}</p>
                                </div>
                            </div>
                            <div class="col-md-5"
                                v-if="menuById.category === 'Drink' && menuById.isConcoction === true">
                                <h3 class="mb-4">Recipe Menu</h3>

                                <div class="table-responsive">
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Raw Material</th>
                                                <th>Dose</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(dc, idx) in menuById.DrinkConcoctions" :key="idx">
                                                <td>{{ idx + 1 }}</td>
                                                <td>{{ dc.RawMaterial.KitchenStore.name }}</td>
                                                <td>{{ dc.dose }} Mililiter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <RouterLink to="/menus" class="btn btn-outline-primary">Cancel</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
