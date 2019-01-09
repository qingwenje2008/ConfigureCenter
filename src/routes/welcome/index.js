import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';
import { connect } from 'dva';
@connect(state => ({ ...state.products,...state.user}))
export default class Welcome extends React.Component {

render(){   
   
  return (
    <div>
     
        c欢迎页
    
    </div>
  );
}
};

