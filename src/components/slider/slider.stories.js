import slider from './slider'

// export default {
//   title: 'Slider',
//   components: { slider },
//   argTypes: {
//     Avatar: {
//       control: { type: 'text' }
//     },
//     Username: {
//       control: { type: 'text' }
//     },
//     Active: {
//       control: { type: 'boolean' }
//     }
//   }  
// }

export const content = (args) => ({
  components: { slider },
  data () {
    return { args }
  },
  template: `<slider :active='${args.Active}' :data="{ id: 0, userAvatar: '${args.Avatar}', username: '${args.Username}', content: '' }" />`
})

content.story = {
  name: 'Default view'
}

content.args = {
  Avatar: 'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png',
  Username: 'Andrew',
  Active: true
}