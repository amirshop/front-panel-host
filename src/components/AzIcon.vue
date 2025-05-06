<template>
  <component :is="currentIcon" class="w-4 h-4" />
</template>
<script setup lang="ts">
import Dashboard from '@/components/icons/tabler/Dashboard.vue'
import Setting from '@/components/icons/tabler/Settings.vue'
import Help from '@/components/icons/tabler/Help.vue'
import { computed, type Component } from 'vue'

interface Props {
  name: string
}

interface Icons {
  [key: string]: Component
}
const icons: Icons = {
  dashboard: Dashboard,
  setting: Setting,
  help: Help,
}
const props = withDefaults(defineProps<Props>(), {
  name: 'dashboard'
})

const currentIcon = computed(() => {
  return icons[props.name]
})
</script>
