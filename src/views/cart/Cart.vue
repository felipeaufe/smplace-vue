<template>
  <article id="cart" class="container">
    <ul>
      <li v-for="product in products" :key="product.ProductID">
        <img :src="product.ThumbnailURL" :alt="product.Name">
        <span>{{ product.Name }}</span>
        <button class="btn btn-info" @click="removeToCart(product.ProductID)">{{ $t('cart.remove') }}</button>
      </li>
    </ul>
  </article>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    computed: mapState({
      products: state => state.cart.all,
    }),
    methods: mapActions('cart', [ 'removeToCart' ]),
  }
</script>

<style lang="scss">
  #cart {
    ul {
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #e2e2e2;
        padding: 10px;

        &:nth-child(odd) {
          background: white;
        }

        img {
          max-height: 80px;
        }
        span {
          width: 100%;
          padding: 0 20px;
        }
      }
    }
  }
</style>