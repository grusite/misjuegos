import { reactive, computed, readonly, toRef } from 'vue'

interface State {
  count: number
  other: string
}

const state = reactive<State>({
  count: 1,
  other: '',
})

const actions = {
  increment: () => {
    state.count++
  },
}

const getters = {
  isEven: computed(() => {
    return state.count % 2 == 0
  }),
}

export const store = {
  state: readonly(state),
  actions,
  getters,
  ref: <K extends keyof State>(key: K) => toRef(state, key),
}
