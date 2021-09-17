<template>
    <div class="title"><h3>Repositories</h3></div>
    <div class="loader" v-if="repos.loading"><spinner /></div>
    <div v-else class="feeds">
      <ul class="feed-list">
        <li class="feed" v-for="feed in repos.data" :key="feed.id">
          <feed v-bind:feed-data="feed">
            <template #feedbody>
              <div class="feedbody-block">
                <div class="feed-title">{{ feed.name }}</div>
                <div v-html="feed.description"></div>
                <counter v-bind:feed-object="feed" />
              </div>
            </template>
          </feed>
        </li>
      </ul>
    </div>
</template>

<script>
import spinner from '../../../components/spinner/spinner.vue'
import feed from '../../../components/feed/feed.vue'
import counter from '../../../components/counter/counter.vue'
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    spinner,
    feed,
    counter
  },
  setup () {
    const store = useStore()

    onMounted(async () => {
      try {
        await store.dispatch('repos/fetchRepos')
      } catch (error) {
        console.log('Error loading data. ' + error)
      }
    })

    return {
      repos: computed(() => store.state.repos)
    }
  }
}
</script>

<style lang="scss" scoped src="./repos.scss"></style>
