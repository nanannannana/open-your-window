import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { setUser } from '../../store/modules/users';
import { useDispatch } from 'react-redux';
import { ExclamationCircleFilled } from '@ant-design/icons';

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { confirm } = Modal;
  const showConfirm = () => {
    confirm({
      title: 'Welcome',
      icon: <ExclamationCircleFilled />,
      content: 'Share your window right now !',
      onOk() {
        navigate('/', { replace: true });
      },
    });
  };

  const showError = () => {
    confirm({
      title: 'Try Again',
      icon: <ExclamationCircleFilled />,
      content: 'You entered wrong email or password',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Wrong');
      },
    });
  };

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await axios
      .post('http://localhost:4000/user/signIn', {
        email: values.email,
        pw: values.password,
      })
      .then((res) => {
        console.log(res);
        res.data
          ? (localStorage.setItem('userid', `${values.email}`), showConfirm())
          : showError();
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="FormContainer">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
        preserve={false}
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

          <a className="login-form-forgot" href="#">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
