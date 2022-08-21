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
                        <li class="nav-item">
                            <RouterLink to="/users/create" class="nav-link">Add User</RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#kitchenStoresMenu" aria-expanded="false"
                    aria-controls="kitchenStoresMenu">
                    <i class="ti-home menu-icon"></i>
                    <span class="menu-title">Kitchen Stores</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="kitchenStoresMenu">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <RouterLink to="/kitchen-stores" class="nav-link">Kitchen Store List</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/kitchen-stores/create" class="nav-link">Add Kitchen Store</RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#rawMaterialsMenu" aria-expanded="false"
                    aria-controls="rawMaterialsMenu">
                    <i class="ti-home menu-icon"></i>
                    <span class="menu-title">Raw Materials</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="rawMaterialsMenu">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <RouterLink to="/raw-materials" class="nav-link">Raw Material List</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/raw-materials/create" class="nav-link">Add Raw Material</RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-toggle="collapse" href="#menusMenu" aria-expanded="false"
                    aria-controls="menusMenu">
                    <i class="ti-home menu-icon"></i>
                    <span class="menu-title">Menus</span>
                    <i class="menu-arrow"></i>
                </a>
                <div class="collapse" id="menusMenu">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item">
                            <RouterLink to="/menus" class="nav-link">Menu List</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink to="/menus/create" class="nav-link">Add Menu</RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</template>
