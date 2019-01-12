import Service from '../services/loginService';
const service = new Service();
export default {

  namespace: 'userInfo',
  state: {},
  effects: {
    *login(action, { put }) {
      const { data } = yield service.login({ hospitalId: action.value });
      action.callback(data);
      yield put({
        type: 'updateState',
        value: data
      });
    },
  },
  reducers: {
    updateState(state, action) {
      return {
        ...state,
        ...action.value
      };
    }
  },

};
