import { shallowMount } from "@vue/test-utils"
import { product, internalization } from "../../../global-config";
import Product from "@/views/home/components/Product"

describe('Home > Product', () => {
  
  const global = {
    mocks: {
      ...internalization
    }
  };

  const wrapper = shallowMount(Product, {
    global,
    propsData: {
      id: product.ProductID,
      name: product.Name,
      price: product.Price,
      old_price: product["Retail Price"],
      preview: product.ThumbnailURL,
    }
  });

  it('Should be expected all properties', () => {
    // Expect
    expect(wrapper.props().id).toBe(product.ProductID);
    expect(wrapper.props().name).toBe(product.Name);
    expect(wrapper.props().price).toBe(product.Price);
    expect(wrapper.props().old_price).toBe(product["Retail Price"]);
    expect(wrapper.props().preview).toBe(product.ThumbnailURL);
  });

  it('Should be call the  normalizeCurrency function', () => {
    // Config
    const price = "142.00";
    const mocked_normalizeCurrency = jest.spyOn(wrapper.vm, 'normalizeCurrency');

    // Expect
    expect(wrapper.vm.normalizeCurrency(product.Price)).toBe(price);
    expect(mocked_normalizeCurrency).toHaveBeenCalled()
  });
});