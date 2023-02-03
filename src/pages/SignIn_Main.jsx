import { Col, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SignIn from '../components/mypage/SignIn';
import SignIn_SignUp from '../components/mypage/SingIn_SignUp';
import styled from 'styled-components';
import DrawerToggler from '../components/common/DrawerToggler';

const SignContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Toggler = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const RegA = styled.a`
  color: #8ca79a;
  font-size: large;
`;

export default function SignIn_Main() {
  const [signBG, setSignBG] = useState('');
  const [isUser, setIsUser] = useState(true);

  const getSignImg = async () => {
    await axios
      .get('http://localhost:4000/user/signin')
      .then((res) => setSignBG(res.data.img))
      .catch((err) => console.log(err));
  };
  console.log('1', signBG);
  useEffect(() => {
    getSignImg();
  }, []);

  return (
    <SignContainer>
      <Toggler>
        <DrawerToggler />
      </Toggler>
      <Row align="middle" justify="space-around">
        <Col span={4} align="center">
          {isUser && <SignIn />}
          {isUser || <SignIn_SignUp />}
          <div style={{ textAlign: 'right' }}>
            <RegA
              onClick={() => {
                setIsUser(!isUser);
              }}
            >
              {isUser
                ? 'Or Register now!'
                : 'Or Already have an account? \n Login now!'}
            </RegA>
          </div>
        </Col>
        <Col span={6} align="center">
          <img src={signBG} style={{ height: '80vh' }} />
        </Col>
      </Row>
    </SignContainer>
  );
}
