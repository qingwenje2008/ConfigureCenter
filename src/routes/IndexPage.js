import { connect } from 'dva';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'dva/router';
import {
  Layout 
} from 'antd';
import Application from './application'
import MainHeader from '../components/mainHeader'
import MainMenu from '../components/mainMenu'
import ContentHeader from '../components/contentHeader'
const {Content} =Layout;
class Users extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Router>
      <Layout style={styles.main}>
        <MainHeader/>
        <Layout>
          <MainMenu/>
          {/** 应用模块的子路由 */}
        <Layout style={styles.menu}>
      
        <ContentHeader/>
        <Content style={styles.content}
        >
          <Switch>
            <Route path={`/app`} exact component={Application} />
          </Switch>
        </Content>
     
          </Layout>
        </Layout>
      </Layout>
    </Router>
  }
}
const styles={
  main:{ width: '100%', height: '100%' },
  content:{
    background: '#fff',
    padding: 24, margin: 0, 
    minHeight: 280,
  },
  menu:{ padding: '0 24px 24px' },
}
// const DownloadPage = ({ match }) => <Download channelId={match.params.id} />;

export default connect()(Users);
