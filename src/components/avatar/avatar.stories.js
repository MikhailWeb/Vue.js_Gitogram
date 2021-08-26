import avatar from './avatar.vue'

export default {
  title: 'Avatar',
  components: { avatar },
  argTypes: {
    userName: {
      control: { type: 'text' }
    },
    userPic: {
      control: { type: 'text' }
    }
  }
}

export const Default = (args) => ({
  components: { avatar },
  data () {
    return { args }
  },
  template: `<avatar title="${args.userName}" src="${args.userPic}" alt="Avatar" />`
})

Default.story = {
  name: 'Default view'
}

Default.args = {
  userName: 'Camille',
  userPic: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png'
}

export const Active = (args) => ({
  components: { avatar },
  data () {
    return { args }
  },
  template: `<avatar title="${args.userName}" src="${args.userPic}" alt="Avatar" active />`
})

Active.args = {
  userName: 'Piter',
  userPic: 'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png'
}

Active.story = {
  name: 'Active view'
}
