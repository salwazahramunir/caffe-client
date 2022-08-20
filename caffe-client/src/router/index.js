import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import Home from '@/views/Home.vue'
import DashboardPage from '@/views/DashboardPage.vue'
import UserList from '@/views/user/UserList.vue'
import UserForm from '@/views/user/UserForm.vue'
import UserDetail from '@/views/user/UserDetail.vue'
import KitchenStoreList from '@/views/kitchen-stores/KitchenStoreList.vue'
import KitchenStoreForm from '@/views/kitchen-stores/KitchenStoreForm.vue'
import RawMaterialList from '@/views/raw-material/RawMaterialList.vue'
import RawMaterialForm from '@/views/raw-material/RawMaterialForm.vue'
import RawMaterialDetail from '@/views/raw-material/RawMaterialDetail.vue'
import MenuList from '@/views/menu/MenuList.vue'
import MenuForm from '@/views/menu/MenuForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'dashboard',
          component: DashboardPage
        },
        {
          path: 'users',
          name: 'users',
          component: UserList
        },
        {
          path: 'users/create',
          name: 'createUser',
          component: UserForm
        },
        {
          path: 'users/:id',
          name: 'editUser',
          component: UserForm
        },
        {
          path: 'users/:id',
          name: 'showUser',
          component: UserDetail
        },
        {
          path: 'kitchen-stores',
          name: 'kitchen-stores',
          component: KitchenStoreList
        },
        {
          path: 'kitchen-stores/create',
          name: 'createKitchenStore',
          component: KitchenStoreForm
        },
        {
          path: 'kitchen-stores/:id',
          name: 'editKitchenStore',
          component: KitchenStoreForm
        },
        {
          path: 'raw-materials',
          name: 'raw-materials',
          component: RawMaterialList
        },
        {
          path: 'raw-materials/create',
          name: 'createRawMaterial',
          component: RawMaterialForm
        },
        {
          path: 'raw-materials/:id',
          name: 'showRawMaterial',
          component: RawMaterialDetail
        },
        {
          path: 'menus',
          name: 'menus',
          component: MenuList
        },
        {
          path: 'menus/create',
          name: 'createMenu',
          component: MenuForm
        },
        {
          path: 'menus/:id',
          name: 'editMenu',
          component: MenuForm
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  const access_token = localStorage.access_token 
  if (to.name === 'login' && access_token) next({ name: 'dashboard' })
  else if (to.path === '/' && !access_token) next({ name: 'login' })
  else next()
})

export default router
