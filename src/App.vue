<script setup lang="ts">
import { reactive, computed, readonly, toRef } from 'vue'
// import Home from './components/Home.vue'
// import Register from './components/Register.vue'
// import Login from './components/Login.vue'

import { store } from './store2'

const a = store.ref('other')
</script>

<template>
  <div>
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/register"> Register </router-link> |
      <router-link to="/login"> Login </router-link> |
    </nav>

    <div>Count: {{ store.state.count }}</div>
    <div>Is Even?: {{ store.getters.isEven }}</div>
    <button
      class="
        px-2
        py-1
        hover:bg-blue-300
        text-blue-800
        bg-blue-200
        rounded
        shadow
        uppercase
        text-xs
        ring-2 ring-blue-300
      "
      @click="store.actions.increment"
    >
      Increment
    </button>
    <router-view />
  </div>
</template>
