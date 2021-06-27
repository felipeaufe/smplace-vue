import { shallowMount } from '@vue/test-utils'
import { $store } from '../../../global-config';

import Home from '@/views/home/Home.vue';
import Product from '@/views/home/components/Product.vue';
import { product } from "../../../global-config";

describe('Home page', () => {

  const global = {
    mocks: {
      $store: {
        ...$store,
        state: {
          products: { all: [ product ] },
        },
      }
    }
  };
  const wrapper = shallowMount(Home, { global });

  it('Should be call the dispatch store function', () => {
    expect(global.mocks.$store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('Should has a Product child component', () => {
    // Config
    const exists = wrapper.findComponent(Product).exists();

    // Expect
    expect(exists).toBe(true);
  });
});