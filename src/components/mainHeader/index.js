
import React from 'react';
import {
    Layout
} from 'antd';
import {connect} from 'dva'
const { Header } = Layout;
class Users extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let username = localStorage.getItem('username')
        return (
            <Header className="header">
                <span style={{ color: 'white' }}>{username} 你好</span>
            </Header>

        );
    }
}
export default Users;