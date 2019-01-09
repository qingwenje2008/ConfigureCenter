import Service from '../services/loginService'
const service = new Service();
export default {

    namespace: 'userInfo',
    state: {},  
    effects:{
      *login (action, { put }) {
        console.log(action)
        const {data} = yield service.login({hospitalId: action.value});
        console.log(data )
        action.callback(data)
        yield put({ 
          type: 'updateState', 
          value: data
        });
      },
    },
    reducers: {
      updateState (state, action) {
        return {
          ...state,
          ...action.value
        };
      }
    },
  
  };
  