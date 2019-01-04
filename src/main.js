import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch } from 'dva/router';
import Layout from './components/layout'
import routes from './routes/routes'
function RouterConfig({ history={}, app={} }) {
  const Routes = () => (
    routes(app).map((item, index) => <Route key={index} path={item.path} component={dynamic(item)} />)
  );
  console.log(app)
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact render={() => (
            <Layout>
             <Routes/>
            </Layout>
           )}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
