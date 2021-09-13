<template>
  <div class="slider">
      <div class="header">
        <div class="progress">
            <x-progress :active="active" @onFinish="$emit('onFinishProgress')"/>
        </div>
        <avatar :title="data.username" :src="data.userAvatar" alt="Avatar" />
      </div>
      <div class="content">
        <div class="load" v-if="loading">loading...</div>
        <div class="text" v-else>
          <div v-if="data.content && data.content.length" v-html="data.content"></div>
          <placeholder :imageblock="true" v-else />
        </div>
      </div>
      <div class="footer">
        <x-button disabled
          :loading="data.following.loading"
          :theme="data.following.status ? 'gray' : 'green'"
          @click="$emit(data.following.status ? 'onUnfollow' : 'onFollow', data.id)">{{ data.following.status ? 'Unfollow' : 'Follow' }}</x-button>
      </div>
  </div>
</template>

<script>

import progress from '../progress/progress.vue'
import avatar from '../avatar/avatar.vue'
import button from '../button/button.vue'
import placeholder from '../placeholder/placeholder.vue'

export default {
  name: 'Slider',
  components: {
    xProgress: progress,
    avatar,
    xButton: button,
    placeholder
  },
  emits: ['onFinishProgress', 'onFollow', 'onUnfollow'],
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" src='./slider.scss'></style>
