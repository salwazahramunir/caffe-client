<script>
import { mapActions, mapState } from 'pinia'
import { RouterLink } from 'vue-router'
import { useMenuStore } from '@/stores/menuStore'
import { useRawMaterialStore } from '@/stores/rawMaterialStore'

export default {
    data() {
        return {
            fullPath: '',
            title: '',
            description: '',
            dataMenu: {
                name: '',
                price: '',
                category: '0',
                isConcoction: '0',
                isAvaiable: '0',
                recipes: [
                    {
                        raw_material_id: '0',
                        dose: ''
                    }
                ]
            }
        }
    },
    watch: {
        "$route.fullPath"(value) {
            if (value === "/menus/create") {
                const { fullPath } = this.$route
                this.dataMenu = {
                    name: '',
                    price: '',
                    category: '0',
                    isConcoction: '0',
                    isAvaiable: '0',
                    recipes: [
                        {
                            raw_material_id: '0',
                            dose: ''
                        }
                    ]
                }

                this.title = "Form Add Menu"
                this.description = "Form Add Menu"
                this.fullPath = fullPath
            }
        }
    },
    computed: {
        ...mapState(useMenuStore, ["menuById"]),
        ...mapState(useRawMaterialStore, ["rawMaterials"])
    },
    methods: {
        ...mapActions(useMenuStore, ["addMenu"]),
        ...mapActions(useRawMaterialStore, ["readAllRawMaterial"]),
        createUpdate() {
            if (this.fullPath === "/menus/create") {
                this.addMenu(this.dataMenu)
            }
        },
        chooseCategory(event) {
            if (event.target.value === "Food") {
                this.dataMenu.isConcoction = false
                this.dataMenu.recipes = []
            } else {
                this.readAllRawMaterial()
            }
        },
        addMore() {
            this.dataMenu.recipes.push({
                raw_material_id: '0',
                dose: ''
            })
        },
        deleteMore(counter) {
            this.dataMenu.recipes.splice(counter, 1);
        }
    },
    created() {
        const { fullPath } = this.$route
        this.fullPath = fullPath

        if (this.fullPath === "/menus/create") {
            this.title = "Form Add Menu"
            this.description = "Form Add Menu"
        } else {
            this.title = "Form Edit Menu"
            this.description = "Form Edit Menu"
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
                                <input type="text" v-model="dataMenu.name" id="name" name="name" class="form-control"
                                    placeholder="name">
                            </div>
                            <div class="form-group">
                                <label for="price">Price</label>
                                <input type="number" v-model="dataMenu.price" id="price" name="price"
                                    placeholder="price" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="category">Category</label>
                                <select id="category" name="category" class="form-control" v-model="dataMenu.category"
                                    style="color: black" @change="chooseCategory($event)">
                                    <option selected value="0" disabled>--- Select One ---</option>
                                    <option value="Food">Food</option>
                                    <option value="Drink">Drink</option>
                                </select>
                            </div>
                            <div v-if="dataMenu.category === 'Drink'" class="form-group">
                                <label for="isConcoction">Concoction</label>
                                <select id="isConcoction" name="isConcoction" class="form-control" style="color: black"
                                    v-model="dataMenu.isConcoction">
                                    <option selected value="0" disabled>--- Select One ---</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div
                                v-if="dataMenu.isConcoction === true || dataMenu.isConcoction === 'true' && dataMenu.category === 'Drink'">
                                <h6 class="mt-4">Make a drink recipe here</h6>
                                <div class=" p-3 mb-4">
                                    <div class="row after-add-more" v-for="(recipe, counter) in dataMenu.recipes"
                                        v-bind:key="counter">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="raw_material_id">{{ counter + 1 }}. Raw Material</label>
                                                <select id="raw_material_id" name="raw_material_id" class="form-control"
                                                    v-model="recipe.raw_material_id" style="color: black">
                                                    <option disabled value="0" selected>
                                                        --- Select Raw Material ---
                                                    </option>
                                                    <option v-for="(rawMaterial, idx) in rawMaterials" :key="idx"
                                                        :value="rawMaterial.id">{{ rawMaterial.KitchenStore.name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="dose">Dose</label>
                                                <input type="number" v-model="recipe.dose" id="dose" name="dose"
                                                    class="form-control" placeholder="dose">
                                                <small style="color: red">enter dose data in milliliters</small>
                                            </div>
                                        </div>
                                    </div>

                                    <button class="btn btn-success add-more btn-sm float-end" @click.prevent="addMore"
                                        type="button">
                                        <i class="glyphicon glyphicon-plus"></i> Add
                                    </button>
                                    <button class="btn btn-danger remove btn-sm float-end"
                                        @click.prevent="deleteMore(counter)" type="button"><i
                                            class="glyphicon glyphicon-remove"></i>
                                        Remove</button>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="isAvaiable">Avaiable</label>
                                <select id="isAvaiable" name="isAvaiable" class="form-control" style="color: black"
                                    v-model="dataMenu.isAvaiable">
                                    <option selected value="0" disabled>--- Select One ---</option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <RouterLink to="/menus" class="btn btn-outline-primary">Cancel</RouterLink>
                            <button type="submit" class="btn btn-primary ml-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
