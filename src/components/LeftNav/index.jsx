import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './index.css';
import logo from '../../assets/images/logo.svg';
import { Menu } from 'antd';
import { AppstoreOutlined, HomeOutlined, ContainerOutlined, ReadOutlined, UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class LeftNav extends Component {
  state = {
    collapsed: false
  };
  // 切换按钮
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    const { pathname } = this.props.location;
    return (
      <>
        <Link to="#" className="left-nav">
          <header className="left-head">
            <img src={logo} alt="logo" />
            <h1>小徐后台</h1>
          </header>
        </Link>
        <div style={{ width: 200 }}>
          <Menu
            defaultSelectedKeys={[pathname]}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key={['/home']} icon={<HomeOutlined />}>
              <Link to={'/home'}>首页</Link>
            </Menu.Item>
            <Menu.Item key={['/category']} icon={<AppstoreOutlined />}>
              <Link to={'/category'}>博客分类</Link>
            </Menu.Item>
            <Menu.Item key={['/article']} icon={<ContainerOutlined />}>
              <Link to={'/article'}>博客管理</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<ReadOutlined />} title="状态管理">
              <Menu.Item key="/operat">
                <Link to={'/operat'}>标签管理</Link>
              </Menu.Item>
              <Menu.Item key="6">状态管理</Menu.Item>
            </SubMenu>
            <Menu.Item key={['/user']} icon={<UserOutlined />}>
              <Link to={'/user'}>用户管理</Link>
            </Menu.Item>
          </Menu>
        </div>
      </>
    );
  }
}
//高阶组件包装非路由组件
export default withRouter(LeftNav);
