import { Col, Row } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SignIn from '../components/mypage/SignIn';
import SignIn_SignUp from '../components/mypage/SignIn_SignUp';
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
  z-index: 5000;
`;

const RegA = styled.a`
  color: #8ca79a;
  font-size: large;
  font-family: 'YUniverse-B';
`;

const Leftbox = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Rightbox = styled.div`
  height: 100vh;
  width: 50vw;
  /* padding: 0 0 0 200px; */
`;

export default function SignIn_Main() {
  const [signBG, setSignBG] = useState();
  const [isUser, setIsUser] = useState(true);

  const getSignImg = async () => {
    await axios
      .get(`http://${process.env.REACT_APP_HOST}/user/signImg`)
      .then((res) =>
        setSignBG(
          res.data.img ||
            'https://images.unsplash.com/photo-1522195491553-dbda973beac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
        )
      )
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getSignImg();
  }, []);

  return (
    <SignContainer>
      <Toggler>
        <DrawerToggler />
      </Toggler>
      <Leftbox>
        {isUser && <SignIn />}
        {isUser || <SignIn_SignUp />}
        <div style={{ textAlign: 'center' }}>
          <RegA
            onClick={() => {
              setIsUser(!isUser);
            }}
          >
            {isUser
              ? 'Or Register now!'
              : 'Or Already have an account? Login now!'}
          </RegA>
        </div>
      </Leftbox>
      <Rightbox>
        <div
          style={{
            backgroundImage: `url(${signBG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
          }}
        ></div>
      </Rightbox>
    </SignContainer>
  );
}
