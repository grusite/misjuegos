<script setup lang="ts">
// import Home from './components/Home.vue'
// import Register from './components/Register.vue'
// import Login from './components/Login.vue'
</script>

<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/register"> Register </router-link> |
      <router-link to="/login"> Login </router-link> |
    </nav>
    <router-view />
  </div>
</template>
