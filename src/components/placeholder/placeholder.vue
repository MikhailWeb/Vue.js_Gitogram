<template>
  <div class="placeholder" :class="{ imageblock }">
    <div class="block-image"></div>
    <div class="block-text-177"></div>
    <div class="block-text-218"></div>
    <div class="block-text-139"></div>
  </div>
</template>

<script>
export default {
  props: {
    imageblock: Boolean
  }
}
</script>

<style lang="scss" src="./placeholder.scss"></style>
