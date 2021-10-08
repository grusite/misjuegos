import { mount } from '@vue/test-utils'
import App from '../src/App.vue'

test('App.vue', () => {
  const wrapper = mount(App)
  expect(wrapper.html()).toContain('Home')
})
