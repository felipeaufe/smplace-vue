export default {
  getById: (state) => (id) => {
    return state.all.find(product => product.ProductID.toString() === id )
  }
}