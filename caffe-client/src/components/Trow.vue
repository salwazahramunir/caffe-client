<script>
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/userStore'
import { useKitchenStore } from '@/stores/kitchenStore'
import { useRawMaterialStore } from '@/stores/rawMaterialStore'
import { useMenuStore } from '@/stores/menuStore'
import { useRoomStore } from '@/stores/roomStore'

export default {
    props: ["trow", "action"],
    data() {
        return {
            fullPath: ''
        }
    },
    computed: {
        columnNames() {
            if (this.fullPath === '/users') {
                return ["username", "email", "role"]
            } else if (this.fullPath === '/kitchen-stores') {
                return ["name", "stock", "quantity", "unit"]
            } else if (this.fullPath === '/raw-materials') {
                return ["nameKitchenStore", "quantity", "souldOut"]
            } else if (this.fullPath === '/menus') {
                return ["name", "price", "category", "isAvaiable"]
            } else if (this.fullPath === '/rooms') {
                return ["codeRoom", "nameRoom", "category", "isEmpty"]
            }
        }
    },
    methods: {
        ...mapActions(useUserStore, ["editUserById", "showUser", "deleteUser"]),
        ...mapActions(useKitchenStore, ["editKitchenStoreById", "deleteKitchenStore"]),
        ...mapActions(useRawMaterialStore, ["showRawMaterial"]),
        ...mapActions(useMenuStore, ["editMenuById", "showMenu", "deleteMenu"]),
        ...mapActions(useRoomStore, ["editRoomById", "showRoom"]),

        handleEdit() {
            if (this.fullPath === "/users") {
                this.editUserById(this.trow.id)
            } else if (this.fullPath === "/kitchen-stores") {
                this.editKitchenStoreById(this.trow.id)
            } else if (this.fullPath === "/menus") {
                this.editMenuById(this.trow.id)
            } else if (this.fullPath === "/rooms") {
                this.editRoomById(this.trow.id)
            }
        },
        handleShow() {
            if (this.fullPath === "/users") {
                this.showUser(this.trow.id)
            } else if (this.fullPath === "/raw-materials") {
                this.showRawMaterial(this.trow.id)
            } else if (this.fullPath === "/menus") {
                this.showMenu(this.trow.id)
            } else if (this.fullPath === "/rooms") {
                this.showRoom(this.trow.id)
            }
        },
        handleDelete() {
            if (this.fullPath === "/users") {
                this.deleteUser(this.trow.id)
            } else if (this.fullPath === "/kitchen-stores") {
                this.deleteKitchenStore(this.trow.id)
            } else if (this.fullPath === "/menus") {
                this.deleteMenu(this.trow.id)
            }
        }
    },
    created() {
        const { fullPath } = this.$route
        this.fullPath = fullPath
    }
}
</script>
<template>
    <tr>
        <td>#</td>
        <td v-for="(td, idx) in columnNames" :key="idx">
            <p v-if="'nameKitchenStore' === td">{{ trow.KitchenStore.name }}</p>
            <p v-else>
                {{ trow[td] }}
            </p>
        </td>
        <td v-if="action.length > 0">
            <span v-if="action['0'] === 'show'">
                <a @click.prevent="handleShow" class="btn btn-outline-info btn-sm"><i class="ti-eye"></i> Show</a>
            </span>
            <span v-if="action['1'] === 'edit'" class=" m-2">
                <a @click.prevent="handleEdit" class="btn btn-outline-primary btn-sm"><i class="ti-pencil"></i>
                    Edit</a>
            </span>
            <span v-if="action['2'] === 'delete'">
                <a @click.prevent="handleDelete" class="btn btn-outline-danger btn-sm"><i class="ti-trash"></i>
                    Delete</a>
            </span>
        </td>
    </tr>
</template>
