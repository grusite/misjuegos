import { reactive, computed, readonly, toRef } from 'vue'

interface State {
  count: number
  other: string
}

const state = reactive<State>({
  count: 1,
  other: '',
})

const getters = {
  isEven: computed(() => {
    return state.count % 2 == 0
  }),
}

const actions = {
  increment: () => {
    state.count++
  },
}

export const store = {
  state: readonly(state),
  getters,
  actions,
  ref: <K extends keyof State>(key: K) => toRef(state, key),
}
