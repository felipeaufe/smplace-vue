<template>
  <section id="products" class="container">
    <ul>
      <li v-for="product in products" :key="product.ProductID">
        <Product
          :id="product.ProductID.toString()"
          :name="product.Name"
          :price="product.Price"
          :old_price="product['Retail Price']"
          :preview="product.ThumbnailURL"
        />
      </li>
    </ul>
  </section>
</template>

<script>
  import { mapState } from 'vuex';
  import Product from './components/Product.vue';

  export default {
    name: 'Home',
    components: {
      Product,
    },
    computed: mapState({
      products: state => state.products.all,
    }),
    created () {
      this.$store.dispatch('products/initializeProducts');
    }
  }
</script>

<style lang="scss">
  #products {
    ul > li {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }

  .is-mobile #products {
    ul > li {
      padding: 0 10px;
    }
  }
  
</style>