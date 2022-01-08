<template>
  <div>
    <Navbar />
    <div class="min-h-screen bg-zinc-50">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>
