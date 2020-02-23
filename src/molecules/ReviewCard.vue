<template>
  <article class="m-review-card">
    <img
      class="m-review-card__avatar"
      :src="avatar"
      alt="Avatar"
    />

    <div class="m-review-card__info">
      <span class="m-review-card__user-name">{{name}}</span>
      <span class="m-review-card__user-date">{{date}}</span>
      <Subtitle :text="title" className="m-review-card__subtitle" />
      <Paragraph :text="description" className="m-review-card__description" />
    </div>
  </article>
</template>

<script>

import Subtitle from '@/atoms/Subtitle.vue';
import Paragraph from '@/atoms/Paragraph.vue';

export default {
  name: 'ReviewCard',
  components: {
    Subtitle,
    Paragraph,
  },
  props: {
    avatar: String,
    name: String,
    date: String,
    title: String,
    description: String,
  },
};

</script>

<style lang="scss">
  .m-review-card {
    position: relative;
    width: 377px;
    height: 250px;
    padding: 24px 32px 32px;
    background: var(--white);
    box-shadow: 0px 2px 8px rgba(64, 62, 85, 0.08);
    border-radius: 6px;

    &__info {
      display: grid;
      grid-template-areas:
        '. name date'
        'subtitle subtitle subtitle'
        'description description description';
      grid-column-gap: 32px;

    }

    &__user-name,
    &__user-date {
      grid-area: name;
      font-family: 'Rubik', sans-serif;
      font-weight: 500;
      font-size: 11px;
      line-height: 13px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--dark-blue);
      opacity: 0.6;
    }

    &__user-date {
      grid-area: date;
    }

    &__subtitle {
      grid-area: subtitle;
      margin: 35px 0 8px;
    }

    &__description {
      grid-area: description;
    }

    &__avatar {
      position: absolute;
      top: -30px;
      left: 32px;
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 16px;
    }
  }
</style>
