<template>
  <div class="slider">
      <div class="header">
        <div class="progress">
            <x-progress />
        </div>
        <avatar title="React.reposit" src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png" alt="Avatar" />
      </div>
      <div class="content">
        <slot name="content"></slot>
      </div>
      <div class="footer">
        <x-button>Follow</x-button>
      </div>
  </div>
</template>

<script>

import progress from '../progress/progress.vue'
import avatar from '../avatar/avatar.vue'
import button from '../button/button.vue'

export default {
  name: 'Slider',
  components: {
    xProgress: progress,
    avatar,
    xButton: button
  }
}

</script>

<style lang="scss" src='./slider.scss'></style>
