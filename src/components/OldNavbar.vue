<template>
  <nav class="bg-emerald-400">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <router-link to="/" class="flex items-center py-5 px-3 text-zinc-900 hover:text-zinc-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span class="font-bold">MIS JUEGOS</span>
          </router-link>
        </div>
        <!-- <router-link to="/"> Home </router-link> -->
        <div class="flex items-center space-x-1">
          <router-link
            to="/login"
            class="font-semibold py-5 px-3 text-zinc-900 hover:text-zinc-700"
          >
            Login
          </router-link>
          <router-link
            to="/register"
            class="font-semibold py-2 px-3 bg-zinc-700 hover:bg-zinc-600 text-emerald-400 hover:text-emerald-300 rounded transition duration-300"
          >
            Register
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
