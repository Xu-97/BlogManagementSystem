import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './index.css';
import logo from '../../assets/images/logo.svg';
import { Menu, Button } from 'antd';
import menuList from '../../config/MenuConfig';
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

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
	//定义路由方法
	getMenuNodes = menuList => {
		return menuList.map(item => {
			if (!item.children) {
				return (
					<Menu.Item key={item.key}>
						<Link to={item.key}>{item.title}</Link>
					</Menu.Item>
				);
			} else {
				return (
					<SubMenu key="{item.key}" title={item.title}>
						{this.getMenuNodes(item.children)}
					</SubMenu>
				);
			}
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
					{/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
						{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
					</Button> */}
					<Menu
						selectedKeys={[pathname]}
						defaultOpenKeys={['sub1']}
						mode="inline"
						theme="dark"
						inlineCollapsed={this.state.collapsed}
					>
						{this.getMenuNodes(menuList)}
					</Menu>
				</div>
			</>
		);
	}
}
//高阶组件包装非路由组件
export default withRouter(LeftNav);
