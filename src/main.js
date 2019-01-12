import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch } from 'dva/router';
import Layout from './components/layout/layout'
function RouterConfig({ history = {}, app = {} }) {

  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={dynamic({
          app,
          models: () => [
            import('./models/user.model')
          ],
          component: () => import('./routes/login'),
        })}
        />
        <Route path="/" render={({ match }) => (<Layout app={app} {...match} />)} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
