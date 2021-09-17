<template>
    <topline>
            <template #headline>
              <div class="title"><h1>Gitogram</h1></div>
              <div class="icons-block">
                  <div class="icon">
                    <router-link to="/"><icon name='home' /></router-link>
                  </div>
                  <div class="icon" :title="user.login">
                    <router-link to="/profile"><img class='user-avatar-icon' :src="user.avatar_url" /></router-link>
                  </div>
                  <div class="icon">
                    <button @click="logout"><icon name='exit' /></button>
                  </div>
              </div>
            </template>
    </topline>
    <div class="profile-page">
        <div class="left-block">
            <h3>My profile</h3>
            <div class="user-info">
                <img class="user-avatar" :src="user.avatar_url" />
                <div class="user-data">
                    <h2>{{ user.login }}</h2>
                    <div class="stat">
                        <span class="followers-cnt"><b>{{ user.followers }}</b> followers</span>
                        <span class="following-cnt"><b>{{ user.following }}</b> <router-link :to="{ name: 'user-following' }">following</router-link></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="right-block">
            <router-view />
        </div>
    </div>
</template>

<script>
import topline from '../../components/topline/topline.vue'
import icon from '../../icons/icon.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'profile',
  components: {
    topline,
    icon
  },
  setup () {
    const store = useStore()
    console.log(store.state.user.data)
    return {
      user: computed(() => store.state.user.data)
    }
  }
}
</script>

<style lang="scss" scoped src="./profile.scss"></style>
