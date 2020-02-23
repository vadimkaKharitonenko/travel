<template>
  <p :class="'a-paragraph ' + className">{{text}}</p>
</template>

<script>

export default {
  name: 'Paragraph',
  components: {},
  props: {
    text: String,
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
