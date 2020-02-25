<template>
  <article class="m-article">
    <span class="m-article__date">{{date}}</span>
    <a :href="link"><Subtitle>{{name}}</Subtitle></a>
  </article>
</template>

<script>

import Subtitle from '@/atoms/Subtitle.vue';

export default {
  name: 'Article',
  components: {
    Subtitle,
  },
  props: {
    name: String,
    link: String,
    date: String,
  },
};

</script>

<style lang='scss'>
  .m-article {
    &__date {
      display: block;
      margin-bottom: 16px;
      font-family: 'Rubik', sans-serif;
      font-weight: 500;
      font-size: 11px;
      line-height: 13px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #403E55;
      opacity: 0.6;
    }
  }
</style>
