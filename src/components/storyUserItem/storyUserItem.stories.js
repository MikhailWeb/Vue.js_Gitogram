import StoryUserItem from './storyUserItem.vue'

export default {
  title: 'UserItem',
  components: { StoryUserItem },
  argTypes: {
    Avatar: {
      control: { type: 'text' }
    },
    userName: {
      control: { type: 'text' }
    }
  }
}

export const Default = (args) => ({
  components: { StoryUserItem },
  data () {
    return { args }
  },
  template: `<story-user-item avatar="${args.Avatar}" username="${args.userName}" @onPress="handlePress(404)" />`
})

Default.args = {
  Avatar: 'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png',
  userName: 'Andrew'
}

Default.story = {
  name: 'Default view'
}
