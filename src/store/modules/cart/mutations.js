export default {
  
  /**
   * Add product to cart
   * 
   * @param {State} state 
   * @param {Array<Products>} products 
   */
   addToCart (state, product) {
    state.all.push(product);
   },

  /**
   * Remove product from cart
   * 
   * @param {State} state 
   * @param {Array<Products>} products 
   */
   removeToCart (state, id) {
    const index = state.all.findIndex(product => product.ProductID === id);
    if (index > -1) {
      state.all.splice(index, 1);
    }
   },
}