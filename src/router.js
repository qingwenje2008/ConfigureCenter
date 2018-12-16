import React from 'react';
import { BrowserRouter, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
function RouterConfig({ history }) {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default RouterConfig;
