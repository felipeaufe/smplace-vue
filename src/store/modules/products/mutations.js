export default {
  
  /**
   * Set products to store
   * 
   * @param {State} state 
   * @param {Array<Products>} products 
   */
  setProducts (state, products) {
    state.all = products;
  },
}