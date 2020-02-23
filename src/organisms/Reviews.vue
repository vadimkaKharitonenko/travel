<template>
  <section class="o-reviews">
    <Heading
      tag='h3'
      :level="3"
      text="Отзывы наших клиентов"
      className="o-reviews__title"
    />

    <div class="o-reviews__items">
      <ReviewCard
        v-for="review in items"
        :key="review.name"
        :avatar="review.avatar"
        :name="review.name"
        :date="review.date"
        :title="review.title"
        :description="review.description"
      />
    </div>
  </section>
</template>

<script>

import Heading from '@/atoms/Heading.vue';
import ReviewCard from '@/molecules/ReviewCard.vue';

export default {
  name: 'Reviews',
  components: {
    Heading,
    ReviewCard,
  },
  props: {
    title: String,
    items: Array,
  },
};

</script>

<style lang="scss">
  .o-reviews {
    &__title {
      margin-bottom: 72px;
    }

    &__items {
      display: grid;
      grid-auto-flow: column;
    }
  }
</style>
