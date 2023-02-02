import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import WindowBtn from '../window/WindowBtn';

const SecondDiv = styled.div`
  width: 100%;
  height: 100vh;
`;
const Window = styled.div`
  width: 50%;
  height: 100%;
  float: left;
  background-image: url('https://images.unsplash.com/photo-1672700678338-97fa44c909f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Universe = styled.div`
  width: 50%;
  height: 100%;
  float: right;
  background-image: url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1811&q=80');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SecondPage() {
  const navigate = useNavigate();

  return (
    <SecondDiv>
      <Window>
        <WindowBtn
          clickEvent={() => navigate('/window')}
          borderColor="#2C2C2A"
          color="#2C2C2A"
          hoverBackgroundColor="#0000002b"
          hoverBorderColor="#2C2C2A"
          hoverColor="#2C2C2A"
          text="WINDOW"
          fontSize="7em"
          className="introButton"
          height="auto"
          padding="0 50px"
          border="1.5px solid #2C2C2A"
          textShadow="2px 2px 1px #fff"
        />
      </Window>
      <Universe>
        <WindowBtn
          clickEvent={() => navigate('/universe')}
          color="#ffffff"
          hoverBackgroundColor="#0000002b"
          hoverBorderColor="#ffffff"
          hoverColor="#ffffff"
          text="UNIVERSE"
          fontSize="7em"
          className="introButton"
          height="auto"
          padding="0 50px"
          border="1.5px solid #ffffff"
          textShadow="2px 2px 2px #2C2C2A"
        />
      </Universe>
    </SecondDiv>
  );
}
