
import React from 'react';
import {
    Layout
} from 'antd';
import {connect} from 'dva'

import { Router, Route, Switch,Redirect } from 'dva/router';
import MainHeader from './components/mainHeader'
import MainMenu from './components/mainMenu'
import ContentHeader from './components/contentHeader'
const { Header } = Layout;
class Users extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        const {children} = this.props;
        return (
           
           <Layout style={styles.main}>
                <MainHeader/>
                <Layout>
                  <MainMenu/>
                  {/** 应用模块的子路由 */}
                  {children}
                 
                </Layout>
              </Layout>
           
              )
        
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
export default Users;