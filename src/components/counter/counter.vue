<template>
  <div class="counters">
    <button class="stars" v-bind:class="{ active: liked }">
      <div class="icon">
          <icon :name="!liked ? 'star' : 'starfill'" />
      </div>{{ !liked ? 'Star' : 'Unstar' }}
    </button>
    <div class="stars-counter">{{ countStars }}</div>
    <button class="forks" v-bind="{ countForks }">
      <div class="icon">
          <icon name="fork" />
      </div>Fork
    </button>
    <div class="forks-counter">{{ countForks }}</div>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  props: { feedObject: Object },
  computed: {
    liked () {
      return this.feedObject.liked
    },
    countStars () {
      return (this.feedObject.stargazers_count >= 1000 ? Math.floor(this.feedObject.stargazers_count / 1000) + 'K' : this.feedObject.stargazers_count)
    },
    countForks () {
      return (this.feedObject.forks >= 1000 ? Math.floor(this.feedObject.forks / 1000) + 'K' : this.feedObject.forks)
    }
  }
}
</script>

<style lang="scss" scoped src="./counter.scss"></style>
