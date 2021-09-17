<template>
  
  <div class="feed-block">
    <slot name="feedbody" />
    <div class="c-feed">
        <toggler @onToggle="toggle" />
        <div class="comments" v-if="shown">
            <ul class="comments-list">
              <placeholder v-if="feedData.issues.loading" />
              <li class="comments-item" v-else v-for="issue in feedData.issues.data" :key="issue.id">
                <comment :username="issue.user.login" :text="issue.title" />
              </li>
            </ul>
        </div>
    </div>
  </div>
  <div class="feed-bottom">{{ feedData.created_at }}</div>
</template>

<script>
import comment from '../comment/comment.vue'
import toggler from '../toggler/toggler.vue'
import placeholder from '../placeholder/placeholder.vue'
import { mapActions } from 'vuex'

export default {
  name: 'feed-item',
  components: {
    comment,
    toggler,
    placeholder
  },
  data () {
    return {
      shown: false
    }
  },
  props: { feedData: Object },
  methods: {
    ...mapActions({
      setIssues: 'starred/setIssues'
    }),
    async toggle (isOpened) {
      this.shown = isOpened
      await this.setIssues(this.feedData.id)
    }
  }
}
</script>

<style lang="scss" src="./feed.scss"></style>
