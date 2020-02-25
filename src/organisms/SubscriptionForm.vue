<template>
  <section class="o-subscription-form">
    <Heading
      tag='h3'
      :level="3"
      className="o-subscription-form__title"
    >{{title}}</Heading>

    <Paragraph
      className="o-subscription-form__description"
    >{{description}}</Paragraph>

    <form class="o-subscription-form__form">
      <Field
        placeholder="Адрес электронной почты"
      />

      <Button
        type="primary"
      >
        Подписаться
      </Button>

      <Checkbox className="agreement">
        <Paragraph className="agreement__text">
          Я согласен на обработку <a href="">персональных данных</a>
        </Paragraph>
      </Checkbox>
    </form>
  </section>
</template>

<script>

import Heading from '@/atoms/Heading.vue';
import Paragraph from '@/atoms/Paragraph.vue';
import Field from '@/molecules/Field.vue';
import Button from '@/atoms/Button.vue';
import Checkbox from '@/atoms/Checkbox.vue';

export default {
  name: 'SubscriptionForm',
  components: {
    Heading,
    Paragraph,
    Field,
    Button,
    Checkbox,
  },
  props: {
    title: String,
    description: String,
  },
};

</script>

<style lang='scss'>
  .o-subscription-form {
    &__title {
      margin-bottom: 16px;
    }

    &__description {
      width: 278px;
      margin-bottom: 24px;
    }

    &__form {
      display: grid;
      grid-template-columns: 377px 277px;
      grid-gap: 20px;
      margin-bottom: 20px;

      .agreement {
        &__text {
          a {
            color: var(--red);
          }
        }
      }
    }
  }
</style>
