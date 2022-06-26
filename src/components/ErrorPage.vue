<template>
  <div class="container flex items-center min-h-screen justify-center mx-auto px-4">
    <section class="py-8 px-4 text-center">
      <div class="max-w-auto mx-auto">
        <div class="md:max-w-lg mx-auto">
          <img class="w-64 mx-auto" src="@/assets/img/problem.png" />
        </div>
        <h2 class="mt-8 uppercase text-xl lg:text-5xl font-black text-gray-200">{{ title }}</h2>
        <p class="mt-6 uppercase text-sm lg:text-base text-gray-200">
          {{ message }}
        </p>
        <router-link
          to="/"
          class="mt-6 bg-pink-700 hover:bg-pink-800 text-gray-200 font-light py-4 px-6 rounded-full inline-block uppercase shadow-md"
          >Back To Homepage
        </router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
  },
}
</script>
