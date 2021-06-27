export default {
  /**
   * Get cart from local storage
   * 
   * @param { commit } context
   */
  initializeCart ({ commit }) {
    commit('setProducts', [])
  },

  /**
   * Add cart product to cart
   * 
   * @param { commit } context
   */
   addToCart ({ commit }, product) {
    commit('addToCart', product);
  },

  /**
   * Remove product from cart
   * 
   * @param { commit } context
   */
   removeToCart ({ commit }, id) {
    commit('removeToCart', id);
  }
}