<template>
    <div class="topline">
        <topline>
            <template #headline>
              <div class="title">
                <h1>Gitogram</h1>
              </div>
              <div class="icons-block">
                  <div class="icon">
                    <router-link to="/">
                        <icon name='home' />
                    </router-link>
                  </div>
                  <div class="icon">
                    <router-link to="/profile">
                          <icon name='userAvatar' />
                    </router-link>
                  </div>
                  <div class="icon">
                    <a href="#exit">
                          <icon name='exit' />
                    </a>
                  </div>
              </div>

            </template>
            <template #content>
                <ul class="stories-list">
                    <li class="stories-item" v-for="trending in trendings" :key="trending.id">
                        <story-user-item
                          :username="trending.owner.login"
                          :avatar="trending.owner.avatar_url"
                          @onPress="$router.push({name: 'stories', params: {initSlide: trending.id}})"
                         />
                    </li>
                </ul>
            </template>
        </topline>
      <div class="feeds">
      <ul class="feed-list">
        <li class="feed" v-for="feed in feedsData" :key="feed.id">
          <feed v-bind:feed-data="feed">
            <template #feedbody>
              <div class="feedbody-block">
                <div class="feed-title">{{ feed.title }}</div>
                <div v-html="feed.description"></div>
                <counter v-bind:feed-object="feed" />
              </div>
            </template>
          </feed>
        </li>
      </ul>
    </div>
    </div>
</template>

<script>
import topline from '../../components/topline/topline.vue'
import icon from '../../icons/icon.vue'
import storyUserItem from '../../components/storyUserItem/storyUserItem.vue'
import stories from './data.json'
import feed from '../../components/feed/feed.vue'
import feedsData from './feeds.json'
import counter from '../../components/counter/counter.vue'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    storyUserItem,
    feed,
    counter
  },
  data () {
    return {
      stories,
      feedsData,
      items: []
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    })
  },
  async created () {
    try {
      await this.fetchTrendings()
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
