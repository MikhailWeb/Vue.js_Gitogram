<template>
    <button
        :class="[
           'c-button',
           `theme-${theme}`,
           { loading }
        ]">
        <span class="btn-text">
          <spinner v-if='loading' />
          <slot v-else></slot>
        </span>
    </button>
</template>

<script>
import spinner from '../spinner/spinner.vue'

export default {
  name: 'Button',
  components: {
    spinner
  },
  props: {
    theme: { type: String },
    loading: { type: Boolean },
    disabled: { type: Boolean }
  }
}
</script>

<style lang="scss" scoped src="./button.scss"></style>
