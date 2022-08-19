<script>
import { mapActions } from 'pinia'
import { useUserStore } from '@/stores/userStore'

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
            <p>
                {{ trow[td] }}
            </p>
        </td>
        <td v-if="action.length > 0">
            <span v-if="action['0'] === 'show'">
                <a @click.prevent="handleShow" class="btn btn-outline-info btn-sm"><i class="ti-eye"></i> Show</a>
            </span>
            <span v-if="action['1'] === 'edit'" class=" m-2">
                <a @click.prevent="handleEdit" class="btn btn-outline-primary btn-sm"><i class="ti-pencil"></i> Edit</a>
            </span>
            <span v-if="action['2'] === 'delete'">
                <a @click.prevent="handleDelete" class="btn btn-outline-danger btn-sm"><i class="ti-trash"></i>
                    Delete</a>
            </span>
        </td>
    </tr>
</template>
