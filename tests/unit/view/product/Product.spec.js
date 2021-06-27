import { shallowMount } from "@vue/test-utils";
import { createStore } from 'vuex';
import { product, internalization, $route } from "../../../global-config";

import Product from '@/views/product/Product';
import StarRating from '@/components/StarRating';

const store = createStore({
  modules: {
    products: {
      namespaced: true,
      state: () => () => ({ all: [ product ] }),
      getters: { getById: () => jest.fn(() => product) },
      actions: { setProductById: jest.fn() }
    },
    cart: {
      namespaced: true,
      actions: { addToCart: jest.fn() }
    }
  }
})

describe("Product", () => {
  const global = {
    plugins: [store],
    mocks: {
      ...internalization,
      $route,
    }
  };

  const wrapper = shallowMount(Product, { global })

  it("Should have a StarRating component", () => {
    // Config
    const exists =  wrapper.findComponent(StarRating).exists();

    // Expect
    expect(exists).toBe(true)
  });

  it("Should have match a product Id", () => {
    expect(wrapper.vm.$data.product.ProductID).toBe(product.ProductID);
  });

  it('Should be call the addToCart method', () => {
    // Config
    const addToCart = wrapper.find('button');
    const mocked_addToCart = jest.spyOn(wrapper.vm, 'addToCart');

    // Execute
    addToCart.trigger('click');

    // Expect
    expect(mocked_addToCart).toHaveBeenCalled();
  });
})