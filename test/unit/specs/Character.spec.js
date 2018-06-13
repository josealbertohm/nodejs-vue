import Vue from 'vue'
import Character from '@/components/Character'

describe('Character.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Character)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
