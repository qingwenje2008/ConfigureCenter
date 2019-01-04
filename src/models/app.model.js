
export default {

  namespace: 'product22s',
  state: [],
  reducers: {
    'delete1'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },

};
