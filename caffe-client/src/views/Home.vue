<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import SidebarRight from '@/components/SidebarRight.vue'
import SidebarLeft from '@/components/SidebarLeft.vue'
import Footer from '@/components/Footer.vue'


export default {
    components: {
        NavBar,
        SidebarRight,
        SidebarLeft,
        Footer
    }
}
</script>
<template>
    <div>
        <div class="container-scroller">
            <NavBar />
            <!-- partial -->
            <div class="container-fluid page-body-wrapper">
                <!-- partial:partials/_settings-panel.html -->
                <SidebarRight />
                <!-- partial -->

                <!-- partial:partials/_sidebar.html -->
                <SidebarLeft />
                <!-- partial -->

                <div class="main-panel">
                    <!-- content -->
                    <RouterView />
                    <!-- content -->

                    <!-- partial:partials/_footer.html -->
                    <Footer />
                    <!-- partial -->
                </div>
                <!-- main-panel ends -->
            </div>
            <!-- page-body-wrapper ends -->
        </div>
    </div>
</template>