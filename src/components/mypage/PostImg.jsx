import React from 'react';
import styled from 'styled-components';
import { Col } from 'antd';
import { useNavigate } from 'react-router';

const ImgDiv = styled.div`
  /* background-color: skyblue; */
  background-image: url(${(props) => props.img});
  background-color: lavender;
  background-size: cover;
  background-position: center;
  height: 30vh;
  border-radius: 7%;
  color: #fff;
  font-size: 2em;
  font-family: 'YUniverse-B';
  text-align: left;
  padding: 6% 6%;
  text-shadow: 2px 2px 1px #000;
  @media (max-width: 1440px) {
    font-size: 1.2em;
  }
`;

export default function PostImg({ pagi }) {
  const navigate = useNavigate();
  const postArr = pagi.filter((v) => pagi.indexOf(v) !== 0);

  return (
    <>
      {pagi.length !== 0 ? (
        postArr.map((v) => (
          <Col span={12} key={v.img}>
            <ImgDiv
              img={v.img}
              onClick={() =>
                navigate('/window/postedit', {
                  replace: true,
                  state: { num: v.num, mypage: 'mypage' },
                })
              }
            >
              {v.country}, {v.city}
            </ImgDiv>
          </Col>
        ))
      ) : (
        <>
          <Col span={12}>
            <ImgDiv />
          </Col>
          <Col span={12}>
            <ImgDiv />
          </Col>
          <Col span={12}>
            <ImgDiv />
          </Col>
          <Col span={12}>
            <ImgDiv />
          </Col>
        </>
      )}
    </>
  );
}
