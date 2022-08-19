<script>
import { RouterLink } from 'vue-router'

export default {

}
</script>
<template>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
            <li class="nav-item">
                <RouterLink class="nav-link" to="/">
                    <i class="icon-grid menu-icon"></i>
                    <span class="menu-title">Dashboard</span>
                </RouterLink>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#usersMenu" aria-expanded="false"
                    aria-controls="usersMenu">
                    <i class="icon-head menu-icon"></i>
                    <span class="menu-title">Users</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="usersMenu">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <RouterLink to="/users" class="nav-link">User List</RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</template>
