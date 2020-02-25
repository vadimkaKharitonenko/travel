<template>
  <label :class="`a-checkbox ${className}`"><slot></slot>
    <input class="a-checkbox__input" type="checkbox" checked="checked">
    <span class="a-checkbox__mark">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.6666 3.5L5.24998 9.91667L2.33331 7" stroke="#FC5954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </span>
  </label>
</template>

<script>

export default {
  name: 'Checkbox',
  props: {
    className: String,
    checked: Boolean,
  },
};

</script>

<style lang='scss'>
  .a-checkbox {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;

    &__mark {
      display: block;
      width: 16px;
      height: 16px;
      margin-right: 8px;
      background: #FFFFFF;
      border: 1px solid rgba(64, 62, 85, 0.1);
      border-radius: 4px;
      cursor: pointer;

      svg {
        display: none;
      }
    }

    &__input {
      display: none;

      &:checked + .a-checkbox__mark {
        svg {
          display: block;
        }
      }
    }
  }
</style>
