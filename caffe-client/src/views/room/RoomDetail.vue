<script>
import { mapState } from 'pinia'
import { useRoomStore } from '@/stores/roomStore'
import { RouterLink } from 'vue-router'

export default {
    computed: {
        ...mapState(useRoomStore, ["roomById"])
    }
}
</script>
<template>
    <div class="content-wrapper">
        <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Room Detail</h4>
                        <p class="card-description">
                            Room Detail
                        </p>

                        <div class="row mt-5">
                            <div class="col-md-4">
                                <img src="@/assets/images/noImage.png" alt="" class="mb-5">
                            </div>
                            <div class="col-md-8">
                                <div>
                                    <h6><b>Code Room</b></h6>
                                    <p>{{ roomById.codeRoom }}</p>
                                </div>
                                <div>
                                    <h6><b>Name Room</b></h6>
                                    <p>{{ roomById.nameRoom }}</p>
                                </div>
                                <div>
                                    <h6><b>Category</b></h6>
                                    <p>{{ roomById.category }}</p>
                                </div>
                                <div>
                                    <h6><b>Price</b></h6>
                                    <p>{{ roomById.price }}</p>
                                </div>
                                <div>
                                    <h6><b>Duration</b></h6>
                                    <p>{{ roomById.duration }} Minutes</p>
                                </div>
                                <div>
                                    <h6><b>Empty</b></h6>
                                    <span v-if="roomById.isEmpty === false" class="badge badge-pill badge-danger">
                                        {{ roomById.isEmpty }}
                                    </span>
                                    <span v-else class="badge badge-pill badge-success">
                                        {{ roomById.isEmpty }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <RouterLink to="/rooms" class="btn btn-outline-primary">Cancel</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
