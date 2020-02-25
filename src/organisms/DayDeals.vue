<template>
  <section class="o-day-deals">
    <Heading
      tag='h3'
      :level="3"
      className="o-day-deals__title"
    >Предложения дня</Heading>

    <div class="o-day-deals__items">
      <TravelCard
        v-for="item in items"
        :key="item.name"
        :bg="item.img"
        :marks="item.marks"
        :name="item.name"
        :tags="item.tags"
        :price="item.price"
      />
    </div>
  </section>
</template>

<script>

import Heading from '@/atoms/Heading.vue';
import TravelCard from '@/molecules/TravelCard.vue';

export default {
  name: 'DayDeals',
  components: {
    Heading,
    TravelCard,
  },
  props: {
    items: Array,
  },
};


</script>

<style lang="scss">
  .o-day-deals {
    margin: 60px 0 40px;

    &__title {
      margin-bottom: 40px;
    }

    &__items {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
  }
</style>
