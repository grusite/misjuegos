<template>
  <div>
    <h3 class="text-3xl font-semibold text-gray-700">Add your game!</h3>

    <div class="mt-8">
      <!-- <h4 class="text-gray-600">Game</h4> -->

      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <!-- <h2 class="text-lg font-semibold text-gray-700 capitalize">Game</h2> -->

          <form @submit.prevent="register">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label class="text-gray-700" for="username">Name</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pink-600 focus:ring focus:ring-opacity-40 focus:ring-pink-500"
                  type="text"
                  v-model="gameBoard.gameName"
                />
              </div>

              <div>
                <label class="text-gray-700" for="emailAddress">Start Date</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pink-600 focus:ring focus:ring-opacity-40 focus:ring-pink-500"
                  type="text"
                  v-model="gameBoard.startDate"
                />
              </div>

              <div>
                <label class="text-gray-700" for="password">Expansion</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pink-600 focus:ring focus:ring-opacity-40 focus:ring-pink-500"
                  type="text"
                  v-model="gameBoard.expansion"
                />
              </div>

              <div>
                <label class="text-gray-700" for="passwordConfirmation">Mission</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pink-600 focus:ring focus:ring-opacity-40 focus:ring-pink-500"
                  type="text"
                  v-model="gameBoard.mission"
                />
              </div>

              <div>
                <label class="text-gray-700" for="passwordConfirmation">Duration</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pink-600 focus:ring focus:ring-opacity-40 focus:ring-pink-500"
                  type="text"
                  v-model="gameBoard.duration"
                />
              </div>

              <div>
                <label class="text-gray-700" for="passwordConfirmation">Characters</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pink-600 focus:ring focus:ring-opacity-40 focus:ring-pink-500"
                  type="text"
                  v-model="gameBoard.characters"
                />
              </div>

              <div>
                <label class="text-gray-700" for="passwordConfirmation">Personajes extra</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pink-600 focus:ring focus:ring-opacity-40 focus:ring-pink-500"
                  type="text"
                  v-model="gameBoard.extraPlayer"
                />
              </div>

              <div>
                <label class="text-gray-700" for="passwordConfirmation">Éxito?</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pink-600 focus:ring focus:ring-opacity-40 focus:ring-pink-500"
                  type="text"
                  v-model="gameBoard.success"
                />
              </div>

              <div>
                <label class="text-gray-700" for="passwordConfirmation">Comments</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-pink-600 focus:ring focus:ring-opacity-40 focus:ring-pink-500"
                  type="text"
                  v-model="gameBoard.notes"
                />
              </div>
            </div>

            <div class="flex justify-end mt-4">
              <button
                class="px-4 py-2 text-gray-200 bg-pink-600 rounded-md hover:bg-pink-500 focus:outline-none focus:bg-pink-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BoardGameMapped } from '../config/api/mapper'

const gameBoard = ref<BoardGameMapped>({
  gameName: '',
  startDate: new Date('2020-01-01').toLocaleDateString() as any,
  duration: 0,
  expansion: '',
  mission: '',
  characters: '',
  extraPlayer: '',
  success: true,
  notes: '',
  players: [],
})

const register = () => {
  const data = JSON.parse(JSON.stringify(gameBoard.value))
  console.log('Registered: ', data)
}
</script>
