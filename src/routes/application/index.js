import React from 'react';
import { Table, Popconfirm, Button } from 'antd';
import { connect } from 'dva';
@connect(state => ({ ...state.products, ...state.user }))
export default class ProductList extends React.Component {
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
        <div style={{ height: 50, width: 100, background: '#f1f1f1' }} onClick={() => {
          const { dispatch, match } = this.props;
          console.log(dispatch)
          dispatch({
            type: 'userInfo/login',
            value: { name: 'hh', pass: 'www' }
          });
        }}>
          测试登录
      </div>
        <Table
          dataSource={this.props.products}
          columns={columns}
        />
      </div>
    );
  }
};

// ProductList.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   products: PropTypes.array.isRequired,
// };

// export default connect(({ products }) => ({
//     products,
//   }))(ProductList);