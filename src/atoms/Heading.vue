<template>
  <div :is="tag" :class="'a-heading -level-' + level + ' ' + className"><slot></slot></div>
</template>

<script>

export default {
  name: 'Heading',
  components: {},
  props: {
    tag: String,
    level: Number,
    className: String,
  },
};

</script>


<style lang="scss">
  .a-heading {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    color: var(--dark-blue);
  }

  .-level {
    &-1 {
      font-size: 96px;
      line-height: 106px;
    }

    &-2 {
      font-size: 48px;
      line-height: 57px;
    }

    &-3 {
      font-size: 36px;
      line-height: 43px;
    }

    &-4 {
      font-size: 24px;
      line-height: 30px;
    }
  }
</style>
