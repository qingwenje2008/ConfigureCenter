
import React from 'react';
import {
    Layout, Menu, Icon,
} from 'antd';
import { Link } from 'dva/router';
import {sliderMenus} from '../../utils/config'

const { SubMenu } = Menu;
const { Sider } = Layout;

class mainMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const menuView = sliderMenus.map((v, i) => {
            return <SubMenu key={i} title={<span><Icon type={v.icon} />{v.title}</span>}>
              {v.items.map((value) => <Menu.Item key={value.key}><Link to={value.link}>{value.title}</Link></Menu.Item>)}
            </SubMenu>
          })
        return (
            <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              {menuView}
            </Menu>
          </Sider>

        );
    }
}
export default mainMenu;