<template>
  <div class="product">    
    <img class="product__image" :src="preview"/>

    <div class="product__detail">
      <span class="product__detail__name">{{ name }}</span>
      <p class="product__detail__price">
        <span>
          {{ $t('currency') }} {{ normalizeCurrency(price) }}
        </span>
        <del v-if="old_price">
          {{ $t('currency') }} {{ normalizeCurrency(old_price) }}
        </del>
      </p>
    </div>

    <router-link class="product__button btn btn-primary" :to="'/product/'+id">
      {{ $t('home.product.button') }}
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "Product",
    props: {
      id: String,
      name: String,
      price: Number,
      old_price: Number,
      preview: String,
    },
    methods: {
      normalizeCurrency (value) {
        return value.toFixed(2).toLocaleString(this.$i18n.locale);
      },
    }
  }
</script>

<style scoped lang="scss">
  .product {
    --title-size: 28px;
    --price-size: 22px;
    --old-price-size: 18px;

    display: inline-grid;
    grid-template-columns: 155px auto 155px;
    align-items: center;
    width: 100%;

    border: 1px solid gray;
    border-radius: 10px;
    padding: {
      top: 15px;
      bottom: 15px;
      left: 15px;
      right: 35px;
    };

    &__image {}

    &__detail {
      color: #7a7a7a;
      padding: 0 15px;

      &__name {
        font-size: var(--title-size);
      }
      &__price {
        display: flex;
        align-items: flex-start;

        span {
          font-size: var(--price-size);
        }
        del { 
          font-size: var(--old-price-size);
          margin-left: 10px;
        }
      }
    }

    &__button {}
  }

  .is-mobile .product {
    grid-template-columns: 100%;
    padding-right: 15px;

    &__image {
      width: 100%;
    }

    &__detail {
      align-items: center;
      justify-content: center;
      display: flex;
      flex-direction: column;
      padding: 25px 0;
    }
  }
</style>