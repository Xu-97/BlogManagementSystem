import React, { Component } from 'react';
import { Menu, Dropdown, Avatar, Badge, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
// 引入路由组件
import { Link } from 'react-router-dom';
import './index.less';
const menu = (
	<Menu>
		<Menu.Item key="0">
			<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
				1st menu item
			</a>
		</Menu.Item>
		<Menu.Item key="1">
			<a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
				2nd menu item
			</a>
		</Menu.Item>
	</Menu>
);
// 点击事件

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				{/* 通知 */}

				<div className="avatar-icon">
					<Badge count={5} offset={[40, -20]} size="small" style={{ zIndex: 1 }}></Badge>
					<Avatar icon={<UserOutlined />} />
				</div>
				<Dropdown overlay={menu}>
					<span
						className="ant-dropdown-link"
						onClick={e => e.preventDefault()}
						style={{ marginRight: '20px' }}
					>
						Hover me <DownOutlined />
					</span>
				</Dropdown>
				<Link to="/login">
					<Button style={{ marginRight: '20px' }}>退出</Button>
				</Link>
			</div>
		);
	}
}
