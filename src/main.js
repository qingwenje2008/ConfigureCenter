import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch,Redirect } from 'dva/router';
import Layout from './components/layout'
import routes from './routes/routes'
function RouterConfig({ history={}, app={} }) {
  const Routes = () => (
    routes(app).map((item, index) => <Route key={index} path={item.path} component={dynamic(item)} />)
  );
// let loginStatus=false
  return (
    <Router history={history}>
      <Switch>
      {/* <Redirect exact from="/" to={loginStatus ? '/home' : '/login'} /> */}
      <Route path="/login" exact component={dynamic({
            app,
            models: () => [
              import('./models/user.model')
            ],
            component: () => import('./routes/login'),
          })}
      />
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
