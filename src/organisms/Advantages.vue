<template>
  <section class="o-advantages">
    <Heading
      tag='h3'
      :level="3"
      :text="title"
      className="o-advantages__title"
    />

    <div class="o-advantages__items">
      <Advantage
        v-for="advantage in items"
        :key="advantage.name"
        :icon="advantage.icon"
        :name="advantage.name"
        :description="advantage.description"
      />
    </div>

  </section>
</template>

<script>

import Heading from '@/atoms/Heading.vue';
import Advantage from '@/atoms/Advantage.vue';

export default {
  name: 'Advantages',
  components: {
    Heading,
    Advantage,
  },
  props: {
    title: String,
    items: Array,
  },
};

</script>

<style lang="scss">
  .o-advantages {
    &__title {
      margin-bottom: 40px;
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-column-gap: 10px;
    }
  }
</style>
