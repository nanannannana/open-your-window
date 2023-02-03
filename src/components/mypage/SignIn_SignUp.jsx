import React from 'react';
import './SignIn_SignUp.css';
import { Form, Input, Checkbox, Button, Modal } from 'antd';
import axios from 'axios';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export default function SignIn_SignUp() {
  const [form] = Form.useForm();

  // 회원가입
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await axios
      .post('http://localhost:4000/user/signUp', {
        email: values.email,
        pw: values.password,
        nickname: values.nickname,
        phone: values.phone,
      })
      .then((res) => showConfirm())
      .catch((err) => console.log(err));
  };

  const showConfirm = () => {
    Modal.success({
      width: 600,
      title: '회원가입이 완료되었습니다.',
      content: '로그인 후 이용해주세요 !',
      onOk() {
        // form.resetFields();
        location.href = '/user/signin';
      },
    });
  };
  /////////// UI 시작/////////////////
  return (
    <div className="FormContainer">
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        onFinish={onFinish}
        style={{ width: 500 }}
        scrollToFirstError
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('The two passwords that you entered do not match!')
                );
              },
            }),
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item
          name="nickname"
          label="Nickname"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input size="large" />
        </Form.Item>
        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ backgroundColor: '#C2CCA8' }}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
