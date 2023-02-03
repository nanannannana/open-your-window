import React, { useState } from 'react';
import { Modal, Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import styled from 'styled-components';
import WindowBtn from '../window/WindowBtn';
import axios from 'axios';
import { useSelector } from 'react-redux';
import DeleteUser from './DeleteUser';

const { success } = Modal;
const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 150px 0 0 0;
  @media (max-width: 1440px) {
    padding: 50px 0 0 0;
  }
`;

export default function MyInfo() {
  const mypost = useSelector((state) => state.mypage.mypost);
  // console.log('mypost', mypost);
  // console.log('user_id', mypost[0]['user.user_id']);

  const showAlert = () => {
    success({
      title: '회원정보가 수정되었습니다!',
    });
  };
  const onFinish = async (values) => {
    // console.log('values', values);
    await axios
      .patch('http://localhost:4000/mypage/userInfoUd', values)
      .then(() => showAlert())
      .catch((err) => console.log(err));
  };

  return (
    <InfoBox>
      <Form
        name="userInfo"
        onFinish={onFinish}
        initialValues={{
          user_id: mypost[0]['user.user_id'],
          user_pw: mypost[0]['user.user_pw'],
          user_name: mypost[0]['user.user_name'],
          phone: mypost[0]['user.phone'],
        }}
        style={{ width: 500 }}
      >
        <Form.Item
          name="user_id"
          label="email"
          rules={[{ required: true, type: 'email', message: '' }]}
        >
          <Input size="large" placeholder="Email" disabled />
        </Form.Item>
        <Form.Item
          name="user_pw"
          label="password"
          rules={[{ required: true, message: '' }]}
        >
          <Input.Password
            size="large"
            type="password"
            placeholder="Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item
          name="user_name"
          label="nickName"
          rules={[{ required: true, message: '' }]}
        >
          <Input size="large" placeholder="Nickname" />
        </Form.Item>
        <Form.Item
          name="phone"
          label="phoneNumber"
          rules={[{ required: true, message: '' }]}
        >
          <Input size="large" placeholder="phoneNumber" />
        </Form.Item>
        <br />
        <Form.Item>
          <WindowBtn
            // onClick={showAlert}
            borderColor="#2C2C2A"
            color="#2C2C2A"
            hoverBackgroundColor="#2C2C2A"
            hoverBorderColor="#ffffff"
            hoverColor="#ffffff"
            fontSize="1.5em"
            height="auto"
            text="정보 수정"
          />
          <DeleteUser />
        </Form.Item>
      </Form>
    </InfoBox>
  );
}
