<template>
  <label :class="`m-field ${className}`">
    <input
      type="text"
      :placeholder="placeholder"
      class="m-field__input"
      :value="value"
    />
  </label>
</template>

<script>

export default {
  name: 'Field',
  props: {
    placeholder: String,
    value: String,
    className: String,
  },
};

</script>

<style lang='scss'>
  .m-field {

    &__input {
      width: 100%;
      padding: 15px 16px;
      font-family: 'Rubik', sans-serif;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: var(--dark-blue);
      background: #FFFFFF;
      border: 1px solid rgba(64, 62, 85, 0.1);
      border-radius: 6px;

      &::placeholder {
        color: rgba(64, 62, 85, 0.4);
      }
    }
  }
</style>
