<template>
  <div>
    <div>Count: {{ store.count }}</div>
    <div>Is Even?: {{ !(store.count % 2) }}</div>
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
      @click="store.increment"
    >
      Increment
    </button>
    <button
      class="
        px-2
        py-1
        ml-3
        hover:bg-red-300
        text-red-800
        bg-red-200
        rounded
        shadow
        uppercase
        text-xs
        ring-2 ring-red-300
      "
      @click="store.$reset()"
    >
      Reset
    </button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../stores/'

const store = useStore()

// {{ store.state.count }} + {{ store.state.text }}
// import { useStore } from './store'

// const store = useStore()

// store.count++
// with autocompletion ✨
// store.$patch({ count: store.count + 1 })
// or using an action instead
// store.increment()
</script>
