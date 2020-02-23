<template>
  <main>
    <div class="container">
      <DayDeals :items="travelCards" />

      <Reviews title="Отзывы наших клиентов" :items="reviews" />

      <Advantages title="Почему выбирают нас" :items="advantages" />
    </div>

    <Footer
      :logo="footer.logo"
      :usefulLinks="footer.usefulLinks"
      :phoneForIndividuals="footer.phoneForIndividuals"
      :phoneHotLine="footer.phoneHotLine"
    />
  </main>
</template>

<script>

import Reviews from '@/organisms/Reviews.vue';
import DayDeals from '@/organisms/DayDeals.vue';
import Advantages from '@/organisms/Advantages.vue';
import Footer from '@/organisms/Footer.vue';

import logo from '../assets/logo.svg';

import icon1 from '../assets/location-icon.svg';
import icon2 from '../assets/star-icon.svg';
import icon3 from '../assets/umbrella-icon.svg';
import icon4 from '../assets/wifi-icon.svg';

import advantage1 from '../assets/advantage-1.svg';
import advantage2 from '../assets/advantage-2.svg';
import advantage3 from '../assets/advantage-3.svg';
import advantage4 from '../assets/advantage-4.svg';

import avatar from '../assets/avatar.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';

import travelBg1 from '../assets/travel-card-1.png';
import travelBg2 from '../assets/travel-card-2.png';
import travelBg3 from '../assets/travel-card-3.png';
import travelBg4 from '../assets/travel-card-4.png';
import travelBg5 from '../assets/travel-card-5.png';
import travelBg6 from '../assets/travel-card-6.png';

export default {
  name: 'Home',
  components: {
    Reviews,
    DayDeals,
    Advantages,
    Footer,
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
      travelCards: [
        {
          img: travelBg1,
          marks: [
            icon1, icon2, icon3, icon4,
          ],
          name: 'Dusit Thani Pattaya',
          tags: [
            'Скидка', '7 ночей',
          ],
          price: 81506,
        },
        {
          img: travelBg2,
          marks: [
            icon1, icon2, icon3, icon4,
          ],
          name: 'Movenpick Siam Hotel Na Jomtien Pattaya',
          tags: [
            'Скидка', '7 ночей',
          ],
          price: 81506,
        },
        {
          img: travelBg3,
          marks: [
            icon1, icon2, icon3, icon4,
          ],
          name: 'Centara Grand Mirage Beach Resort Pattaya',
          tags: [
            'Скидка', '7 ночей',
          ],
          price: 81506,
        },
        {
          img: travelBg4,
          marks: [
            icon1, icon2, icon3, icon4,
          ],
          name: 'Sala Phuket Mai Khao Beach Resort',
          tags: [
            'Скидка', '7 ночей',
          ],
          price: 81506,
        },
        {
          img: travelBg5,
          marks: [
            icon1, icon2, icon3, icon4,
          ],
          name: 'Angsana Laguna Phuket',
          tags: [
            'Скидка', '7 ночей',
          ],
          price: 81506,
        },
        {
          img: travelBg6,
          marks: [
            icon1, icon2, icon3, icon4,
          ],
          name: 'Metadee Resort',
          tags: [
            'Скидка', '7 ночей',
          ],
          price: 81506,
        },
      ],
      advantages: [
        {
          icon: advantage1,
          name: 'В любую страну',
          description: 'Большое количество туров в одном месте',
        },
        {
          icon: advantage2,
          name: '24 года работы в интернете',
          description: 'Знаем всё о продажах онлайн и безопасных платежах через интернет',
        },
        {
          icon: advantage3,
          name: 'Безопасность',
          description: 'Ваши платёжные и личные данные надежно защищены',
        },
        {
          icon: advantage4,
          name: 'Оплата тура по частям',
          description: 'Внесите часть суммы и забронируйте тур. Остальное доплатите позже',
        },
      ],
      footer: {
        logo,
        usefulLinks: [
          {
            name: 'Где купить?',
            url: '/',
          },
          {
            name: 'Концепции отдыха',
            url: '/',
          },
          {
            name: 'Акции',
            url: '/',
          },
          {
            name: 'Полезная информация',
            url: '/',
          },
          {
            name: 'О компании',
            url: '/',
          },
          {
            name: 'Отдых начинается с Турции',
            url: '/',
          },
        ],
        phoneForIndividuals: '+7 (383) 249-24-98',
        phoneHotLine: '8 (800) 232-78-09',
      },
    };
  },
};

</script>

<style lang="scss">

</style>
