import { connect } from 'dva';
import React from 'react';
import {
  Layout
} from 'antd';
import ContentHeader from '../contentHeader';
import PropTypes from 'prop-types';
const { Content } = Layout;

class MyLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Layout style={styles.menu}>
        <ContentHeader />
        <Content style={styles.content}>
          {children}
        </Content>
      </Layout>
    );
  }
}
const styles = {
  content: {
    background: '#fff',
    padding: 24, margin: 0,
    minHeight: 280,
  },
  menu: { padding: '0 24px 24px' },
};

MyLayout.propTypes = {
  children: PropTypes.object
};
export default connect()(MyLayout);
