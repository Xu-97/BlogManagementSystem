import React, { Component } from 'react';
import './index.less';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// 网络请求
import { getLogin } from '../../api/login';
//将用户信息放到本地存储
import memoryUtils from '../../utils/memoryUtils';
import opreactStroage from '../../utils/opreactStroage';
export default class Login extends Component {
	onFinish = async values => {
		const res = await getLogin(values);
		if (res.data.code === 200) {
			const user = res.data.results.user;
			memoryUtils.user = user;
			opreactStroage.saveUser(user); //存入
			message.success('登录成功');
			this.props.history.replace('/home');
		} else {
			console.log(res);
			this.props.history.replace('/login');

			message.error(res.data.results);
		}
	};
	render() {
		return (
			<div className="login">
				<div>
					<div className="title">
						<h1>小徐博客管理系统</h1>
					</div>
					<div className="login-form">
						<Form
							name="normal_login"
							className="login-form"
							initialValues={{
								remember: true
							}}
							onFinish={this.onFinish}
						>
							<Form.Item
								name="userName"
								rules={[
									{
										required: true,
										message: '请输入用户名!'
									}
								]}
							>
								<Input
									prefix={<UserOutlined className="site-form-item-icon" />}
									placeholder="用户名"
								/>
							</Form.Item>
							<Form.Item
								name="passWord"
								rules={[
									{
										required: true,
										message: '请输入密码！'
									}
								]}
							>
								<Input
									prefix={<LockOutlined className="site-form-item-icon" />}
									type="password"
									placeholder="密码"
								/>
							</Form.Item>
							<Form.Item>
								<Button
									type="primary"
									htmlType="submit"
									className="login-form-button"
									onClick={this.loginIn}
								>
									登录
								</Button>
							</Form.Item>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}
