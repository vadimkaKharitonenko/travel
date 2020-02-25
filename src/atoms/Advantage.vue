<template>
  <article class="a-advantage">
    <img :src="icon" alt="Advantage" class="a-advantage__icon"/>

    <Heading
      tag='h4'
      :level="4"
      className="o-advantage__name"
    >{{name}}</Heading>

    <Paragraph className="a-advantage__description">{{description}}</Paragraph>
  </article>
</template>

<script>

import Heading from '@/atoms/Heading.vue';
import Paragraph from '@/atoms/Paragraph.vue';

export default {
  name: 'Advantage',
  components: {
    Heading,
    Paragraph,
  },
  props: {
    icon: String,
    name: String,
    description: String,
  },
};

</script>

<style lang="scss">
  .a-advantage {
    display: grid;
    grid-row-gap: 16px;
    width: 277px;

    &__icon {
      height: 40px;
    }
  }
</style>
