<template>
  <span :class="'a-subtitle ' + className"><slot></slot></span>
</template>

<script>

export default {
  name: 'Subtitle',
  props: {
    className: String,
  },
};

</script>

<style lang="scss">
  .a-subtitle {
    display: block;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: var(--dark-blue);
    opacity: .8;
  }
</style>
