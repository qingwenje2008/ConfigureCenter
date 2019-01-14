import React from 'react';
import { Table, Popconfirm, Button } from 'antd';
import { connect } from 'dva';

import PropTypes from 'prop-types';
@connect(state => ({ ...state.products }))
class ProductList extends React.Component {
  static defaultProps = {
    dispatch: ()=>{},
    products:[]
  }
  onDelete = (id) => {
    this.props.dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  render() {
    const columns = [{
      rowKey: '1',
      title: 'Name',
      dataIndex: 'name',
    }, {
      rowKey: '2',
      title: 'Actions',
      render: (text, record) => {
        return (
          <Popconfirm title="Delete?" onConfirm={() => this.onDelete(record.id)}>
            <Button>Delete</Button>
          </Popconfirm>
        );
      },
    }];
    return (
      <div>
        <Table
          dataSource={this.props.products}
          columns={columns}
        />
      </div>
    );
  }
}

ProductList.propTypes = {
  dispatch: PropTypes.object,
  products: PropTypes.array,
};

export default ProductList;