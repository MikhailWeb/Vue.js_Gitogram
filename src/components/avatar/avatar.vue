<template>
    <div class="avatar">
        <div :class="['avatar-img', {'active' : active }]">
            <img v-bind="$attrs">
        </div>
        <div><span class="username">{{ title }}</span></div>
    </div>
</template>

<script>

export default {
  props: {
    title: String,
    active: Boolean
  }
}

</script>

<style lang="scss" scoped src="./avatar.scss"></style>
