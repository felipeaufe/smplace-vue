<template>
  <article id="product" :data-product-id="product.ProductID">
    <section class="product container">
      
      <div class="product__image">
        <img :src="product.PictureURL" :alt="product.Name">
        <div v-if="badges.length > 0" class="badges">
          <span v-for="(badge, index) in badges" :key="index">{{ badge }}</span>
        </div>
        <div>
          <p><strong>Brand:</strong>  {{ brand }}</p>
          <p><strong>Color:</strong>  {{ color }}</p>
        </div>
      </div>

      <div class="product__description">
        <h1>{{ product.Name }}</h1>
        <div class="product__description--rating">
          <StarRating :rate="product.RatingAvg"/>
        </div>
        <p>{{ product.Description }}</p>
      </div>

      <div class="product__checkout">
        <div class="product__checkout--price">
          <span>{{ $t('currency') }} {{ product.Price }}</span>
          <del v-if="product.Price != product['Retail Price']">{{ $t('currency') }} {{ product['Retail Price'] }}</del>
        </div>
        <div>
          <span v-if="product.Stock <= 0" class="product__checkout--outstock">
            {{ $t('product.outstock') }}
          </span>
          <button class="btn btn-primary" @click="addToCart(product)">{{ $t('product.button') }}</button>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import StarRating from '@/components/StarRating';

  export default {
    name: "Product",
    data() {
      return {
        product: {}
      }
    },
    components: {
      StarRating,
    },
    computed: {
      ...mapGetters('products', [ 'getById' ]),
      badges () {
        return this.product.Badges.length ? this.resetSeparator(this.product.Badges).split("|") : [];
      },
      brand () {
        return this.resetSeparator(this.product.Brand).replace(/\|/g, ", ");
      },
      color () {
        return this.resetSeparator(this.product.Color).replace(/\|/g, ", ");
      },
    },
    methods: {
      ...mapActions('cart', [ 'addToCart' ]),
      resetSeparator(value) {
        return value
          .replace(/ \| /g, '|')
          .replace(/ \|/g, '|')
          .replace(/\| /g, '|')
          .replace(/\|/g, '|');
      }
    },
    created() {
      const id = this.$route.params.id;
      this.$store.dispatch('products/setProductById', id);
      this.product = this.getById(id);
    },
  }
</script>

<style lang="scss">
  #product {
    .product {
      display: grid;
      grid-template-columns: 25% 50% 25%;

      &__image {
        position: relative;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .badges {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: {
            top: 0;
            bottom: 10px;
            left: 10px;
            right: 10px;
          }
          
          span {
            background-color: #ff470f;
            color: white;
            padding: 10px 15px;
            border: 1px solid black;
          }
        }
      }
      &__description {
        padding: 0 15px;
    
        h1 {
          font-size: 28px;
        }
        
        &--rating > div {
          transform: scale(0.8);
          left: -13px;
        }

        p {
          margin-top: 30px;
        }
      }
      &__checkout {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        color: #707070;

        &--price {
          display: flex;

          span {
            font-size: 35px;
          }
          del {
            margin-left: 10px;
            font-size: 20px;
          }
        }
        &--outstock {
          display: block;
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: 600;
          color: red;
        }
        .btn {
          width: 200px;
        }
      }
    }
  }

  .is-mobile #product {
    padding: 0 10px;

    .product {
      grid-template-columns: 100%;
  
      &__description {
        padding: 35px 0;
      }
      &__checkout {}
    }
  }
  
</style>