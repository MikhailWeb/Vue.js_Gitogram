import { mount } from '@vue/test-utils'
import feed from './feed'

describe('Test component: issues', () => {
  it('Draw list elements', async () => {
    const issue = {
        title: 'test-title',
        user: { login: 'test-login' }
      }
    
    const wrapper = mount(feed, {
      propsData: {
        feedData: {
          owner: {
            avatar_url: '',
            login: 'test-login'
          },
          issues: {
            data: Array.from({ length: 5 }).map(x => issue)
          },
          created_at: '01-01-2021'
        }    
      }
    })
    
    expect(wrapper.find('comments').exists()).toBe(false)

    await wrapper.find('button').trigger('click')

    expect(wrapper.findAll('.comments-item').length).toBe(5)
  })
})