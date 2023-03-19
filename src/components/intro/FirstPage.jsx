import { Carousel } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { Button, Space } from 'antd';

const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  z-index: 100;
`;
const Title = styled.div`
  font-size: 7em;
  color: #fff;
  text-shadow: 2px 2px 2px #2c2c2a;
`;
const SubTitle = styled.div`
  font-size: 1.2em;
  margin: -15px 0 30px 0;
  color: #fff;
  text-shadow: 2px 2px 2px #2c2c2a;
`;
const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  /* background-image: url(${(props) => props.backgrond_img}); */
`;
const LandingBtn = styled(Button)`
  border-color: #fff;
  color: #fff;
  background-color: #0000002b;
  font-family: 'YUniverse-B';
  font-size: 2.5em;
  height: auto;
  padding: 0 30px;
  text-shadow: 2px 2px 2px #2c2c2a;
  &:hover {
    background-color: #dddddd2b !important;
    border-color: #fff !important;
    color: #fff !important;
  }
`;

export default function FirstPage({ setMain }) {
  const img = [
    'https://images.unsplash.com/photo-1602582295696-d159f54ecbfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1012&q=80',
    'https://images.unsplash.com/photo-1581342803201-7483d703f2e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3024&q=80',
    'https://images.unsplash.com/photo-1559756006-31f44543e49b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  ];

  return (
    <>
      <FirstDiv>
        <Title>Open Your Window</Title>
        <SubTitle>당신의 창 밖 풍경을 전세계 사람들과 공유해보세요</SubTitle>
        <Space className="site-button-ghost-wrapper" wrap>
          <LandingBtn ghost onClick={() => setMain(2)} htmlType="submit">
            start
          </LandingBtn>
        </Space>
      </FirstDiv>

      <Carousel autoplay dots={false} effect={'fade'} autoPlaySpeed={4000}>
        {img.map((v, i) => (
          <Img src={v} key={i} />
        ))}
      </Carousel>
    </>
  );
}
