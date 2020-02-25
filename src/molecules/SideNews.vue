<template>
  <section class="m-side-news">
    <a href="" class="m-side-news__link">
      <Heading
        tag='h4'
        :level="4"
        className="m-side-news__title"
      >Новости</Heading>

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="#403E55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </a>

    <div class="m-side-news__articles">
      <Article
        v-for="article in articles"
        :key="article.name"
        :name="article.name"
        :date="article.date"
        :link="article.link"
      />
    </div>
  </section>
</template>

<script>

import Heading from '@/atoms/Heading.vue';
import Article from '@/molecules/Article.vue';

export default {
  name: 'SideNews',
  components: {
    Heading,
    Article,
  },
  props: {
    articles: Array,
  },
};

</script>

<style lang='scss'>
  .m-side-news {
    padding: 32px;
    background-color: var(--white);

    &__articles {
      display: grid;
      grid-row-gap: 40px;
    }

    &__link {
      display: flex;
      align-items: center;
      margin-bottom: 40px;

      svg {
        margin-left: 16px;
      }
    }
  }
</style>
