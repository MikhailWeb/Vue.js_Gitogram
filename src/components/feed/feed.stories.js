import feed from './feed.vue'
import counter from '../counter/counter.vue'

export default {
  title: 'Feed',
  components: {
    feed,
    counter
  }
}

const info = {owner: [
  {
  id: 1,
  login: 'Joshua_1',
  avatar_url: 'https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png',
  title: 'Vue.js',
  description: '<b>JavaScript</b> framework for building interactive web applications',
  stars: 350,
  forks: 25,
  created_at: '16.08.2021',
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
                    <div class="feed-title">{{ info.owner.title }}</div>
                    <div v-html="info.owner.description"></div>
                    <counter v-bind:feed-object="info" />
                    </div>
                </template>
            </feed>`
})

Default.story = {
  name: 'Default view'
}
