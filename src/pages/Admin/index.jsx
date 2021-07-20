import React, { Component } from 'react';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import LeftNav from '../../components/LeftNav';
//引入布局文件
//引入需要的路由文件
import Home from '../Home';
import Category from '../Category';
import Article from '../Article';
import Operat from '../Operat';
import User from '../User';
const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {
	render() {
		return (
			<Layout style={{ height: '100%' }}>
				<Sider style={{ backgroundColor: '#ffffff' }}>
					<LeftNav />
				</Sider>
				<Layout>
					<Header>Header</Header>
					<Content style={{ backgroundColor: '#ccc' }}>
						<Switch>
							<Route path="/home" component={Home}></Route>
							<Route path="/category" component={Category}></Route>
							<Route path="/article" component={Article}></Route>
							<Route path="/operat" component={Operat}></Route>
							<Route path="/user" component={User}></Route>
							<Redirect to="/home" />
						</Switch>
					</Content>
					<Footer style={{ textAlign: 'center', color: '#ccc' }}>值得信赖的小徐</Footer>
				</Layout>
			</Layout>
		);
	}
}
