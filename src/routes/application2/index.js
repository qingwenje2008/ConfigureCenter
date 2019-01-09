
import React from 'react';
import {
  Layout 
} from 'antd';
import ContentHeader from '../../components/contentHeader'
const {Content} =Layout;
export default class ProductList extends React.Component {

render(){   
    // const { children } = this.props;
  return (
          <Layout style={styles.menu}>
            <ContentHeader/>
            <Content style={styles.content}>
              {}
            </Content>
          </Layout>
 
  );
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
