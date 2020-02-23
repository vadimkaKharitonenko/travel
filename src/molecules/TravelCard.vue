<template>
  <article class="m-travel-card">
    <img class="m-travel-card__bg" :src="bg" />

    <div class="m-travel-card__info">
      <ul class="m-travel-card__marks">
        <li class="mark" :key="mark" v-for="mark in marks">
          <img :src="mark" alt="Mark" />
        </li>
      </ul>

      <Heading tag="h4" :level="4" className="m-travel-card__name" :text="name"/>

      <ul class="m-travel-card__tags">
        <li class="tag" :key="tag" v-for="tag in tags">
          <span class="tag__name">{{tag}}</span>
        </li>
      </ul>
    </div>

    <button class="m-travel-card__submit">
      от {{new Intl.NumberFormat('ru-RU').format(price)}} ₽
    </button>

    <div class="m-travel-card__divider">
      <div class="circle"/>

      <ul class="dots">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>

      <div class="circle"/>
    </div>

    <div class="m-travel-card__divider">
      <div class="circle"/>

      <ul class="dots">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>

      <div class="circle"/>
    </div>

    <div class="m-travel-card__divider">
      <div class="circle"/>

      <ul class="dots">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>

      <div class="circle"/>
    </div>
  </article>
</template>

<script>

import Heading from '@/atoms/Heading.vue';

export default {
  name: 'TravelCard',
  components: {
    Heading,
  },
  props: {
    bg: String,
    marks: Array,
    name: String,
    tags: Array,
    price: Number,
  },
  data() {
    return {

    };
  },
};

</script>

<style lang="scss">
  .m-travel-card {
    position: relative;
    width: 377px;
    height: 209px;
    padding: 16px;
    border-radius: 8px;

    &__divider {
      position: absolute;
      top: -8px;
      right: 47px;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 16px;
      height: 226px;
      transition: .3s ease-in-out;

      .circle {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: var(--white);
      }

      .dots {
        position: absolute;
        top: 11px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(10, 1fr);
        height: 215px;

        li {
          width: 4px;
          height: 10px;
          border-radius: 5px;
          background-color: var(--white);
        }
      }
    }

    &__submit {
      position: absolute;
      top: 77px;
      right: -77px;
      z-index: 1;
      display: float;
      justify-content: center;
      align-items: center;
      width: 209px;
      height: 55px;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--white);
      transform: rotate(-90deg);
      background: rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(4px);
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      cursor: pointer;
      transition: .3s ease-in-out;

      &:hover {
        top: 77px;
        right: -80px;
        width: 210px;
        background-color: var(--red);
        transform: rotate(-89deg);

        & + .m-travel-card__divider {
          transform: skewX(-1deg);
          right: 44px;
        }

        & ~ .m-travel-card__divider:nth-last-child(2) {
          transform: skewX(-.5deg);
          right: 45px;
        }
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      height: 177px;
    }

    &__bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 377px;
      height: 209px;
      object-fit: cover;
      border-radius: 8px;
    }

    &__marks {
      position: relative;
      z-index: 1;
      display: grid;
      grid-auto-flow: column;
      grid-column-gap: 8px;
      width: max-content;
      margin-bottom: auto;

      .mark {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 32px;
        height: 32px;
        background-color: var(--white);
        border-radius: 50%;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
      }
    }

    &__tags {
      position: relative;
      z-index: 1;
      display: grid;
      grid-auto-flow: column;
      grid-column-gap: 8px;
      width: max-content;

      .tag {
        padding: 4px 8px;
        background: rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(6px);
        border-radius: 4px;

        &__name {
          font-family: 'Roboto', sans-serif;
          font-weight: normal;
          font-size: 11px;
          line-height: 13px;
          color: var(--white);
        }
      }
    }

    &__name {
      position: relative;
      z-index: 1;
      max-width: 255px;
      margin-bottom: 8px;
      color: var(--white);
    }
  }
</style>
