import dva from 'dva';
import './index.css';
// import createLoading from 'dva-loading';

// const app = dva({
//     history: browserHistory,
//   });
  // const app = dva({
  //     initialState: {
  //       products: [
  //         { name: 'dva', id: 1 },
  //         { name: 'antd', id: 2 },
  //       ],
  //     },
  //   });
//   app.use(createLoading());
  
// 1. Initialize
const app = dva();

// 2. Plugins
app.use({});

// 3. Model
app.model(require('./models/global.model').default);

// 4. Router
app.router(require('./main').default);

// 5. Start
app.start('#root');
