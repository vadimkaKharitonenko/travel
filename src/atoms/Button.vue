<template>
  <button :class="`a-button -${type} ${className}`">
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: 'Button',
  props: {
    type: String,
    className: String,
  },
};

</script>

<style lang='scss'>
  .a-button {
    width: 100%;
    padding: 16px 20px;
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #FFFFFF;
    border-radius: 6px;
    cursor: pointer;

    &.-primary {
      background-color: var(--red);
    }
  }
</style>
