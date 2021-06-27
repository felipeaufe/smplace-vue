export default {
  getCount: (state) => () => {
    return state.all.length
  }
}