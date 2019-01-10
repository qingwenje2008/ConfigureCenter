import React from 'react';
import dynamic from 'dva/dynamic';
import { Router, Route, Switch,Redirect } from 'dva/router';
import Layout from './components/layout'
import routes from './routes/routes'
function RouterConfig({ history={}, app={} }) {
  const Routes = () => (
    routes(app).map((item, index) => <Route key={index} path={item.path} component={dynamic(item)} />)
  );
let loginStatus=localStorage.getItem('username')
  return (
    <Router history={history}>
      <Switch>
      <Redirect exact from="/" to={loginStatus ? '/welcome' : '/login'} />
      <Route path="/login" exact component={dynamic({
            app,
            models: () => [
              import('./models/user.model')
            ],
            component: () => import('./routes/login'),
          })}
      />
        
            <Layout>
             {/* <Redirect exact from="/home" to={'/app'} /> */}
             <Routes/>
            </Layout>
           
          
      </Switch>
    </Router>
  );
}

export default RouterConfig;
