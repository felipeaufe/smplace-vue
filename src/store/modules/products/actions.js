import products from '../../../database/productList.json';

export default {
  /**
   * Get all products from database
   * 
   * @param { commit } context
   */
  initializeProducts ({ commit }) {
    commit('setProducts', products)
  },

  /**
   * Get all products from database
   * 
   * @param { commit } context
   */
   setProductById ({ commit }, id) {
    const product = products.find(product => product.ProductID.toString() === id);
    commit('setProducts', [product]);
  }
}