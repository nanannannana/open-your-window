import React, { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const RegA = styled.a`
  color: #8ca79a;
`;

export default function SignIn() {
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);

    let SignSuccess = await axios
      .post('http://localhost:4000/user/signIn', {
        email: values.email,
        pw: values.password,
      })
      .then((res) =>
        res.data
          ? navigate('/', { replace: true })
          : (() => setIsUser(!isUser), console.log('new user'))
      )
      .catch((err) => console.log(err));
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="E-mail"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <RegA href="/user/signin_up">register now!</RegA>
      </Form.Item>
    </Form>
  );
}
