<template>
  <div class="counters">
    <button class="stars">
      <div class="icon">
          <icon name="star" />
      </div>Star
    </button>
    <div class="stars-counter">{{ feedObject.stars }}</div>
    <button class="forks">
      <div class="icon">
          <icon name="fork" />
      </div>Fork
    </button>
    <div class="forks-counter">{{ feedObject.forks }}</div>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  components: {
    icon
  },
  props: { feedObject: Object }
}
</script>

<style lang="scss" scoped src="./counter.scss"></style>
