<template>
  <div>Home.vue! + {{ store.state.count }} + {{ store.state.text }}</div>
</template>

<script setup lang="ts">
import { useStore } from '@/store'

const store = useStore()
</script>
