import { defineStore } from 'pinia'

export const useApiStatusStore = defineStore('apiStatus', {
  state: () => ({
    status: '',
    error: {},
  }),
  getters: {
    getStatus(state) {
      return state.status
    },
    getError(state) {
      return state.error
    },
  },
})
