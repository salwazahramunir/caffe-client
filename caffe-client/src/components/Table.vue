<script>
import Thead from '@/components/Thead.vue'
import Trow from '@/components/Trow.vue'
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '@/stores/userStore'
import { useKitchenStore } from '@/stores/kitchenStore'

export default {
    data() {
        return {
            fullPath: ''
        }
    },
    components: {
        Thead,
        Trow
    },
    computed: {
        ...mapState(useUserStore, ["users", "theadUser", "actionUser"]),
        ...mapState(useKitchenStore, ["kitchenStores", "theadKitchenStore", "actionKitchenStore"]),

        trowData() {
            if (this.fullPath === "/users") {
                return this.users
            } else if (this.fullPath === "/kitchen-stores") {
                return this.kitchenStores
            }
        },
        theadData() {
            if (this.fullPath === "/users") {
                return this.theadUser
            } else if (this.fullPath === "/kitchen-stores") {
                return this.theadKitchenStore
            }
        },
        actionData() {
            if (this.fullPath === "/users") {
                return this.actionUser
            } else if (this.fullPath === "/kitchen-stores") {
                return this.actionKitchenStore
            }
        },
    },
    methods: {
        ...mapActions(useUserStore, ["readAllUser"]),
        ...mapActions(useKitchenStore, ["readAllKitchenStore"])
    },
    created() {
        const { fullPath } = this.$route
        this.fullPath = fullPath
        if (fullPath === '/users') {
            this.readAllUser()
        } else if (fullPath === '/kitchen-stores') {
            this.readAllKitchenStore()
        }
    }
}
</script>
<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>No</th>
                    <Thead v-for="(th, idx) in theadData" :key="idx" :thead="th" />
                    <th v-if="actionData.length > 0">Action</th>
                </tr>
            </thead>
            <tbody>
                <Trow v-for="(tr, idx) in trowData" :key="idx" :trow="tr" :action="actionData" />
            </tbody>
        </table>
    </div>
</template>
