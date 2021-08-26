import toggler from './toggler.vue'

export default {
  title: 'Toggler',
  components: { toggler },
  argTypes: {
    isOpened: {
      control: { type: 'boolean' }
    }
  }
}

export const Default = (args) => ({
  components: { toggler },
  data () {
    return { args }
  },
  template: `<toggler v-bind:is-opened="${args.isOpened}" @onToggle="toggle" />`
})

Default.args = {
  isOpened: false
}

Default.story = {
  name: 'Default view'
}
