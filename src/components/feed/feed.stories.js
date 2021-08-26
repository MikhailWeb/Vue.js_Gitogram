import feed from './feed.vue'
import counter from '../counter/counter.vue'

export default {
  title: 'Feed',
  components: {
    feed,
    counter
  }
}

const info = {
  id: 1,
  username: 'Joshua_1',
  avatar: 'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png',
  title: 'Vue.js',
  description: '<b>JavaScript</b> framework for building interactive web applications',
  stars: '330k',
  forks: 25,
  date: '16.08.2021',
  issues: [
    {
      id: 1,
      username: 'Joshua_1',
      text: 'Comment #1'
    },
    {
      id: 2,
      username: 'Camille',
      text: 'Comment #2'
    },
    {
      id: 3,
      username: 'Marselle',
      text: 'Comment #3'
    }
  ]
}

export const Default = () => ({
  components: {
    feed,
    counter
  },
  data () {
    return {
      info: info
    }
  },
  template: `<feed v-bind:feed-data="info">
                <template #feedbody>
                    <div class="feedbody-block">
                    <div class="feed-title">{{ info.title }}</div>
                    <div v-html="info.description"></div>
                    <counter v-bind:feed-object="info" />
                    </div>
                </template>
            </feed>`
})

Default.story = {
  name: 'Default view'
}
