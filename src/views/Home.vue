<template>
  <div>
    <span :class="$style.bigEmoji">⏰ 🚀</span>
    <h1>orafal.dev - work in progress...</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" module>
.big-emoji {
  font-size: 48px;
}
</style>
