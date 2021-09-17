import { shallowMount } from '@vue/test-utils'
import toggler from './toggler'

describe('Test component: toggler', () => {
  it("Change text on click", async () => {
    const wrapper = shallowMount(toggler)

    expect(wrapper.find('.text').text()).toBe('View issues')

    await wrapper.find('button').trigger('click')

    expect(wrapper.find('.text').text()).toBe('Hide issues')
  })
})
