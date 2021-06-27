import { createStore } from 'vuex';
import products from './modules/products';
import cart from './modules/cart';

export const store = createStore({
  modules:{
    products,
    cart,
  },
});