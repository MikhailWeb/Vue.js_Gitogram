import topline from './topline.vue'

export default {
  title: 'Topline',
  components: { topline },
  argTypes: {
    headline: {
      control: { type: 'text' }
    },
    content: {
      control: { type: 'text' }
    }
  }
}

export const Default = (args) => ({
  components: { topline },
  data () {
    return { args }
  },
  template: `<topline>
                <template #headline><h1>${args.headline}</h1></template>
                <template #content>${args.content}</template>
            </topline>`
})

Default.args = {
  headline: 'Title',
  content: 'Content'
}

Default.story = {
  name: 'Default view'
}
