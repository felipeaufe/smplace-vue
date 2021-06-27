<template>
  <nav>
    <div class="container">
      <div class="brand">
        <router-link to="/">
          <img src="../assets/image/logo/brand.png"/>
        </router-link>
      </div>

      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>

      <ul class="right">
        <li id="header-cart" class="cart">
          <router-link to="/cart">
            <img src="../assets/image/shopping-cart.png">
            <span v-if="getCount() > 0">{{ getCount() }}</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import { notify } from "@kyvg/vue3-notification";
  import { mapGetters } from 'vuex'

  export default {
    name: "Header",
    data () {
      return {
        cart: {
          count: 0,
        }
      }
    },
    computed: {
      ...mapGetters('cart', [ 'getCount' ]),
    },
    created () {
      this.$store.watch(
        () => this.getCount(),
        (newValue, oldValue)=>{
          if(newValue > oldValue) {
            notify({
              type: 'success',
              text: this.$i18n.t('header.cart.status.added_cart'),
            });
          }
        }
      )
    },  
  }
</script>

<style scoped lang="scss">
  nav {
    width: 100vw;
    height: $header-height;
    position: fixed;
    background-color: white;
    box-shadow: 0px 0px 8px #00000036;
    z-index: 999;

    & > div {
      height: 100%;
      display: flex;
    }

    .brand,
    ul,li,a {
      height: 100%;
    }
    
    ul {
      display: flex;


      li {
        &.cart {
          position: relative;
          span {
            position: absolute;
            bottom: 8px;
            right: 0px;
            background-color: #f1e448;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 11px;
            font-weight: 600;
          }

          img {
            height: 24px;
          }

          .popover__content > div {
            min-width: 200px;
          }
        }

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          color: black;
          font-size: 18px;
          padding: 15px;
          &.router-link-active {
            color: #2a2a80;
            font-weight: 700;
            background-color: #f1f1f1;
          }
          &:hover {
            background-color: #f1f1f1;
          }
        }
      }

      &.right {
        margin-left: auto;
      }
    }



    .brand {
      a {
        padding: 10px;
        display: block;
        img {
          height: 100%;
        }
      }
    }
  }
</style>
