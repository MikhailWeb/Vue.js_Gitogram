import button from './button.vue'

export default {
  title: 'Button',
  component: { button },
  argTypes: {
    text: {
      control: { type: 'text' }
    },
    loading: {
      control: { type: 'boolean' }
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
  loading: false
}

cButton.story = {
  name: 'Default view'
}
