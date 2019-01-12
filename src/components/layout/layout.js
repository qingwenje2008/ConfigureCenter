import { connect } from 'dva';
import React from 'react';
import { BrowserRouter as Router,withRouter, Route, Switch,Redirect,IndexRoute } from 'dva/router';
import {
  Layout 
} from 'antd';

import dynamic from 'dva/dynamic';
import MainHeader from '../mainHeader';
import MainMenu from '../mainMenu';
import routes from '../../routes/routes';
import Content from './content';
import PropTypes from 'prop-types';
class MainLayout extends React.Component {
  render() {
    const { app } = this.props;

    const Routes = () => (
      routes(app).map((item, index) => <Route key={index} path={item.path} component={dynamic(item)} />)
    );
    const loginStatus=localStorage.getItem('username');
    return (
      <Layout style={styles.main}>
        <MainHeader/>
        <Layout>
          <MainMenu/>
          {/** 应用模块的子路由 */}
          <Switch>
            <Redirect exact from="/" to={loginStatus?'/welcome':'login' } />
            <Route  path={'/welcome'} component={dynamic({app, models:() => [import('../../models/welcome.model')],component: () => import('../../routes/welcome')})} />
            <Content>
              <Routes/>
            </Content>
          </Switch> 
        </Layout>
      </Layout>
    );
  }
}
const styles={
  main:{ width: '100%', height: '100%' },
};
MainLayout.propTypes = {
  app: PropTypes.object
};
export default connect()(MainLayout);
