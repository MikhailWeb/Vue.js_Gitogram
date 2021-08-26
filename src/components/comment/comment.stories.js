import comment from './comment.vue'

export default {
  title: 'Comment',
  components: { comment },
  argTypes: {
    username: {
      control: { type: 'text' }
    },
    text: {
      control: { type: 'text' }
    }
  }
}

export const Comment = (args) => ({
  components: {
    comment
  },
  data () {
    return { args }
  },
  template: '<comment :text="args.text" :username="args.username" />'
})

Comment.args = {
  username: 'Username',
  text: 'Comment'
}

Comment.story = {
  name: 'Default view'
}
