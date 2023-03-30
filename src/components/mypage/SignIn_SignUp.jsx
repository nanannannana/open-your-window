import React, { useEffect, useRef, useState } from 'react';
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
  // const [newE, setNewE] = useState('');

  const [showOK, setShowOK] = useState(false);
  const [showErr, setShowErr] = useState(false);
  const [idFix, setIdFix] = useState(false);
  const getE = useRef();

  // const getNewE = (e) => {
  //   console.log(e.currentTarget.value);
  //   setNewE(e.currentTarget.value);
  // };
  // email 중복 확인
  const checkE = async () => {
    console.log(getE.current.input.value);

    await axios
      .post(`http://${process.env.REACT_APP_HOST}/user/checkEmail`, {
        email: getE.current.input.value,
      })
      .then((res) => {
        res.data ? setShowOK(true) : setShowErr(true);
        console.log(res.data);
      });
  };

  const idSuccess = () => {
    Modal.success({
      width: 600,
      content: 'You can use this Email',
      onOk() {
        // getE.current.disabled = true;
        // getE.current.focus();
        setIdFix(true);
        setShowOK(false);
        console.log('OK');
      },
    });
  };
  const idError = () => {
    Modal.warning({
      width: 600,
      content: 'This email is already taken !',
      onOk() {
        console.log('Fail');
        setShowErr(false);
        // getE.current.disabled = true;
        // getE.current.focus();
      },
    });
  };

  // 회원가입
  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await axios
      .post(`http://${process.env.REACT_APP_HOST}/user/signUp`, {
        email: values.email,
        pw: values.password,
        nickname: values.nickname,
        phone: values.phone,
      })
      .then(() => showConfirm())
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

  /////////////////// UI 시작/////////////////
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
          hasFeedback
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
            // {
            //   validator: (_, value) => {
            //     let regexr =
            //       /^[0-9a-zA-Z]([-_\.]?[-9a-zA-z])*@[0-9a-zA-Z]([-_\.]?[-9a-zA-z])*\.[a-zA-Z]{2,3}$/;
            //     return regexr.test(value)
            //       ? Promise.resolve()
            //       : Promise.reject(new Error('Invalid E-mail Address'));
            //   },
            // },
          ]}
        >
          <Input
            size="large"
            ref={getE}
            disabled={idFix}
            placeholder="default@example.com"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            size="large"
            style={{ backgroundColor: '#C2CCA8' }}
            onClick={checkE}
          >
            Check Email
          </Button>
        </Form.Item>

        {showOK && idSuccess()}
        {showErr && idError()}

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
              validator: (_, value) => {
                let regexr =
                  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&])(?!.* ).{8,12}$/;
                return regexr.test(value)
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error(
                        'At least one lowercase, uppercase, and special character (e.g., @#$%&) are required.'
                      )
                    );
              },
            },
          ]}
          hasFeedback
        >
          <Input.Password size="large" placeholder="Should be 8~12 letters" />
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
            {
              validator: (_, value) => {
                let regexr = /^\d{10,11}$/;
                return regexr.test(value)
                  ? Promise.resolve()
                  : Promise.reject(new Error('Check your phone number'));
              },
            },
          ]}
        >
          <Input size="large" placeholder="Enter numbers only" />
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
