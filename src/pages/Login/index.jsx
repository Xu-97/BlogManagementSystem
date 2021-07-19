import React, { Component } from 'react';
import './index.less';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default class Login extends Component {
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
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!'
                  }
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码！'
                  }
                ]}
              >
                <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
