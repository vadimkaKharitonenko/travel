<template>
  <p :class="'a-paragraph ' + className"><slot></slot></p>
</template>

<script>

export default {
  name: 'Paragraph',
  components: {},
  props: {
    className: String,
  },
};

</script>

<style>
  .a-paragraph {
    font-family: 'Rubik', sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: var(--dark-blue);
    opacity: 0.8;
  }
</style>
