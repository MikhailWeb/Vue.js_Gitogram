import counter from './counter.vue'

export default {
  title: 'Counter',
  components: { counter },
  argTypes: {
    stars: {
      control: { type: 'number' }
    },
    forks: {
      control: { type: 'number' }
    }
  }
}

export const Default = (args) => ({
  components: { counter },
  data () {
    return { args }
  },
  template: `<counter v-bind:feed-object="{id: 1, stars: ${args.stars}, forks: ${args.forks}}" />`
})

Default.args = {
  stars: 350,
  forks: 20
}

Default.story = {
  name: 'Default view'
}
