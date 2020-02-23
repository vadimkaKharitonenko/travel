<template>
  <span :class="'a-subtitle ' + className">{{text}}</span>
</template>

<script>

export default {
  name: 'Subtitle',
  props: {
    text: String,
    className: String,
  },
};

</script>

<style lang="scss">
  .a-subtitle {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--dark-blue);
    opacity: .8;
  }
</style>
