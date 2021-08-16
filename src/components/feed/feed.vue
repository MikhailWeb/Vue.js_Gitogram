<template>
  <div class="feed-top">
    <div class="feed-user">
      <img :src="feedData.avatar" />
      <div class="username">{{ feedData.username }}</div>
    </div>
  </div>
  <div class="feed-block">
    <slot name="feedbody" />
    <div class="c-feed">
        <toggler @onToggle="toggle" />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
              <li class="comments-item" v-for="issue in feedData.issues" :key="issue.id">
                <comment :username="issue.username" :text="issue.text" />
              </li>
            </ul>
        </div>
    </div>
  </div>
  <div class="feed-bottom">{{ feedData.date }}</div>
</template>

<script>
import comment from '../comment/comment.vue'
import toggler from '../toggler/toggler.vue'

export default {
  name: 'feed-item',
  components: {
    comment,
    toggler
  },
  data () {
    return {
      shown: false
    }
  },
  props: { feedData: Object },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped src="./feed.scss"></style>
