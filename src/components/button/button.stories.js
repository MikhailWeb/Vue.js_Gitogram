import button from './button.vue'

export default {
  title: 'Button',
  component: { button },
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    hoverText: {
      control: { type: 'text' }
    }
  }
}

export const cButton = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `<x-button v-bind="args">${args.text}</x-button>`
})

cButton.args = {
  text: 'Follow',
  hoverText: 'Unfollow'
}

cButton.story = {
  name: 'Default view'
}
