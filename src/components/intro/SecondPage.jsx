import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { Button } from 'antd';

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
const LandingBtn = styled(Button)`
  border-color: ${(props) => props.border_color} !important;
  color: ${(props) => props.color} !important;
  font-family: 'YUniverse-B';
  font-size: 5vw;
  height: auto;
  width: 50%;
  border: ${(props) => props.border} !important;
  text-shadow: ${(props) => props.text_shadow} !important;
  &:hover {
    background-color: #0000002b !important;
    border-color: ${(props) => props.hover_border_color} !important;
    color: ${(props) => props.hover_color} !important;
  }
  @media (max-width: 767px) {
    font-size: 4vw !important;
  }
`;

export default function SecondPage() {
  const navigate = useNavigate();

  return (
    <SecondDiv>
      <Window>
        <LandingBtn
          ghost
          onClick={() => navigate('/window')}
          border_color="#2C2C2A"
          color="#2C2C2A"
          hover_border_color="#2C2C2A"
          hover_color="#2C2C2A"
          border="1.5px solid #2C2C2A"
          text_shadow="2px 2px 1px #fff"
        >
          WINDOW
        </LandingBtn>
      </Window>
      <Universe>
        <LandingBtn
          ghost
          onClick={() => navigate('/universe')}
          color="#ffffff"
          hover_border_color="#ffffff"
          hover_color="#ffffff"
          border="1.5px solid #ffffff"
          text_shadow="2px 2px 2px #2C2C2A"
        >
          UNIVERSE
        </LandingBtn>
      </Universe>
    </SecondDiv>
  );
}
