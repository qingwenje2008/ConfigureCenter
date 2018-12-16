import { connect } from 'dva';
import React from 'react';
import { HashRouter as Router, Route, Switch } from 'dva/router';
import {
  Layout
} from 'antd';
import Application from './application'
import MainHeader from '../components/mainHeader'
import MainMenu from '../components/mainMenu'

class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Router>
      <Layout style={{ width: '100%', height: '100%' }}>
        <MainHeader/>
        <Layout>
          <MainMenu/>
          {/** 应用模块的子路由 */}
          <Switch>
            <Route path={`/app`} exact component={Application} />
          </Switch>
        </Layout>
      </Layout>
    </Router>
  }
}
// const DownloadPage = ({ match }) => <Download channelId={match.params.id} />;

export default connect()(Users);
