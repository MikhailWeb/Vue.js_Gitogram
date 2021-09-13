import counter from './counter.vue'

export default {
  title: 'Counter',
  components: { counter },
  argTypes: {
    stargazers_count: {
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
  template: `<counter v-bind:feed-object="{id: 1, stargazers_count: ${args.stargazers_count}, forks: ${args.forks}}" />`
})

Default.args = {
  stargazers_count: 350,
  forks: 20
}

Default.story = {
  name: 'Default view'
}
