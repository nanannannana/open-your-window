import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Modal } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router';
// import { ExclamationCircleFilled } from '@ant-design/icons';

export default function SignIn() {
  const navigate = useNavigate();

  const showConfirm = () => {
    Modal.success({
      width: 600,
      wrapClassName: 'confModal',
      title: 'Welcome',
      content: 'Share your window right now !',
      bodystyle: 'fontFamily: YUniverse-B',
      onOk() {
        navigate('/', { replace: true });
      },
    });
  };

  const showError = () => {
    Modal.warning({
      width: 600,
      wrapClassName: 'errModal',
      title: 'Try Again',
      content: 'You entered wrong email or password',
      onOk() {
        console.log('OK');
      },
    });
  };
  // 로그인
  // 성공시 localStorage에 {'userid': 'email'} 저장
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

  //// UI 시작////////////////// 로그인 창
  return (
    <div className="FormContainer">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        style={{ width: 500 }}
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
            size="large"
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
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <span className="login-form-forgot">Forgot password</span>
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ backgroundColor: '#C2CCA8' }}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
