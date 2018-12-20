import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';
import { connect } from 'dva';

class ProductList extends React.Component {
    onDelete=(id)=> {
        this.props.dispatch({
          type: 'products/delete',
          payload: id,
        });
      }
render(){   
    console.log(this.props)
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
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
      <div style={{width:'100%',height:'100%'}}>
        <Table
        dataSource={this.props.products}
        columns={columns}
        />
      </div>
  );
}
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default connect(({ products }) => ({
    products,
  }))(ProductList);