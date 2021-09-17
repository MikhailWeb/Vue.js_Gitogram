<template>
    <div class="title"><h3>Following</h3></div>
    <div class="loader" v-if="following.loading"><spinner /></div>
    <div v-else class="following">
       <ul class="following-list">
           <li class="following-item" v-for="item in following.data" :key="item">
               <div class="following-block">
                  <div class="feed-user">
                    <img :src="item.avatar_url" />
                    <div class="user-data">
                      <div class="user-login">{{ item.login }}</div>
                      <div class="user-type">{{ item.type }}</div>
                    </div>
                  </div>
                  <c-button>following</c-button>
               </div>
           </li>
       </ul>
    </div>
</template>

<script>
import spinner from '../../../components/spinner/spinner.vue'
import button from '../../../components/button/button.vue'
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    spinner,
    cButton: button
  },
  setup () {
    const store = useStore()
    const user = computed(() => store.state.user.data)

    onMounted(async () => {
      try {
        await store.dispatch('following/fetchFollowing', { login: user.value.login })
      } catch (error) {
        console.log('Error loading data. ' + error)
      }
    })
    return {
      following: computed(() => store.state.following)
    }
  }
}
</script>

<style lang="scss" scoped src="./following.scss"></style>
