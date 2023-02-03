import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import styled from 'styled-components';
import WindowBtn from '../window/WindowBtn';
import axios from 'axios';

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default function MyInfo() {
  //useEffect 작성

  const onFinish = async (values) => {
    // update문
    // await axios
    //   .patch('http://localhost:4000/', values)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };

  return (
    <InfoBox>
      <Form name="userInfo" onFinish={onFinish} style={{ width: 500 }}>
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
          name="nickName"
          label="nickName"
          rules={[{ required: true, message: '' }]}
        >
          <Input size="large" placeholder="Nickname" />
        </Form.Item>
        <Form.Item
          name="phoneNum"
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
