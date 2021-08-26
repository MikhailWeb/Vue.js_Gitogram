<template>
    <div class="topline">
        <topline>
            <template #headline>
              <div class="title">
                <h1>Gitogram</h1>
              </div>
              <div class="icons-block">
                  <div class="icon">
                    <a href="#home">
                          <icon name='home' />
                    </a>
                  </div>
                  <div class="icon">
                    <a href="#profile">
                          <icon name='userAvatar' />
                    </a>
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
                    <li class="stories-item" v-for="item in items" :key="item.id">
                        <story-user-item
                          :username="item.owner.login"
                          :avatar="item.owner.avatar_url"
                          @onPress="handlePress(item.id)"
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
import * as api from '../../api'

export default {
  name: 'feeds',
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  },
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
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
