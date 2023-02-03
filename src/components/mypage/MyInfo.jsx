import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import WindowBtn from '../window/WindowBtn';
import axios from 'axios';
import { useSelector } from 'react-redux';

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default function MyInfo() {
  const mypost = useSelector((state) => state.mypage.mypost);
  console.log('mypost', mypost);
  console.log('user_id', mypost[0]['user.user_id']);

  const onFinish = async (values) => {
    console.log('values', values);
    // update문
    await axios
      .patch('http://localhost:4000/mypage/userInfoUd', values)
      .then(() => alert('회원정보가 수정되었습니다.'))
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
          <Input size="large" placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="user_pw"
          label="password"
          rules={[{ required: true, message: '' }]}
        >
          <Input size="large" type="password" placeholder="Password" />
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

        <Form.Item>
          <WindowBtn
            borderColor="#2C2C2A"
            color="#2C2C2A"
            hoverBackgroundColor="#2C2C2A"
            hoverBorderColor="#ffffff"
            hoverColor="#ffffff"
            fontSize="1.5em"
            height="auto"
            text="Submit"
          />
        </Form.Item>
      </Form>
    </InfoBox>
  );
}
