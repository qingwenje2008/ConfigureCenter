
export default {

  namespace: 'products',
  state: {
    products: [{ name: 'dva', rowKey: 1, id: 1 },
      { name: 'antd', rowKey: 2, id: 2 }
    ]
  },

  reducers: {
    'delete'(state, { payload: id }) {
      const arr = state.products.filter(item => item.id !== id);
      return {...state,products:arr};
    },
  },

};
