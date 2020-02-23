<template>
  <main class="container">
    <Reviews title="Отзывы наших клиентов" :items="reviews" />
  </main>
</template>

<script>

import Reviews from '@/organisms/Reviews.vue';

import avatar from '../assets/avatar.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';

export default {
  name: 'Home',
  components: {
    Reviews,
  },
  data() {
    return {
      reviews: [
        {
          avatar,
          name: 'Люция',
          date: '20.01.2020',
          title: 'Эта экскурсия обязательно к посещению, чтобы понять дух этого сильного народа',
          description: `«Отдыхали с мужем на Фукуоке в январе 
            2020 года и в начале были даже расстроены, что кроме моря за время отдыха мы ничего…»`,
        },
        {
          avatar: avatar2,
          name: 'Алексей',
          date: '03.12.2019',
          title: 'Отдых сложился интересным, познавательным и комфортным',
          description: `«Хороший отдых с гидом Coral Travel на острове Пхукет, 
            Тайланд — Еленой Политовой. Отдыхали в середине ноября на Пхукете, отель Surintra…»`,
        },
        {
          avatar: avatar3,
          name: 'Виктория',
          date: '03.12.2019',
          title: 'Помогла перенести экскурсию без потери денег',
          description: `«Отдыхали в ОАЭ в Аджмане в Ramada Beach с 13/11 по 26/11, 
            в связи с чем хочу выразить огромную благодарность представителю вышей 
            компании NATALI DULOGLU. За все…»`,
        },
      ],
    };
  },
};

</script>

<style lang="scss">

</style>
