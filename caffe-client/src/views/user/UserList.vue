<script>
import Table from '@/components/Table.vue'
export default {
    components: {
        Table
    }
}
</script>
<template>
    <div class="content-wrapper">
        <div class="col-lg-12 grid-margin stretch-card">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title">User List</h4>
                    <p class="card-description">
                        User List
                    </p>

                    <Table />
                </div>
            </div>
        </div>
    </div>
</template>
