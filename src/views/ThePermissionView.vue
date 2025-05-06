<template>
  <div>
    <h2>Accounts App (Remote)</h2>
    <PermissionApp />
    <!-- <RouterView /> -->
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { RouterView } from 'vue-router'
const PermissionApp = defineAsyncComponent(() => import('remotePermissions/PermissionApp'))
</script>
