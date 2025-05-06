<template>
  <div id="remote-container"></div>
  <TheAmir />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  import('remotePermissions/PermissionApp').then((app) => {
    const el = document.getElementById('remote-container')
    if (el) {
      app.default.mount(el)
    }
  })
})
</script>
