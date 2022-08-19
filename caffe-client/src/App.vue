<script>
import { RouterView } from 'vue-router'

export default {
  created() {
    if (localStorage.access_token) {
      this.$router.push({ name: 'dashboard' })
    } else {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
<template>
  <RouterView />
</template>