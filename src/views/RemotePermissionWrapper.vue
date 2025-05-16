<template>
  <div id="permission-container" />
</template>

<script setup lang="ts">
import { mountPermissionApp } from 'remotePermissions/PermissionApp'
import { onMounted,  } from 'vue'

let appInstance: ReturnType<typeof mountPermissionApp> | null = null

onMounted(() => {
  const container = document.getElementById('permission-container')
  if (container) {
    container.innerHTML = ''
    mountPermissionApp(container)
  }
})
</script>
