<template>
  <section class="o-map">
    <Heading
      tag='h3'
      :level="3"
      className="o-map__title"
    >{{title}}</Heading>

    <a :href="link">
      <img class="o-map__img" :src="img" alt="Map">
    </a>
  </section>
</template>

<script>

import Heading from '@/atoms/Heading.vue';

export default {
  name: 'Map',
  components: {
    Heading,
  },
  props: {
    title: String,
    img: String,
    link: String,
  },
};

</script>

<style lang='scss'>
  .o-map {
    margin: 40px 0 60px;

    &__title {
      margin-bottom: 40px;
    }

    &__img {
      width: 100%;
      object-fit: cover;
    }
  }
</style>
