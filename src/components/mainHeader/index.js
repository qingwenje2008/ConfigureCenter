
import React from 'react';
import {
    Layout
} from 'antd';

const { Header } = Layout;
class Users extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Header className="header">
                <span style={{ color: 'white' }}>header</span>
            </Header>

        );
    }
}
export default Users;