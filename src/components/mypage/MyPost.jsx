import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import PostImg from './PostImg';
import { useSelector } from 'react-redux';
import MypagePagi from './MypagePagi';

const MyPostDiv = styled.div`
  margin: 50px 0 0 0;
`;
const ImgDiv = styled.div`
  background-image: url(${(props) => props.img});
  background-color: #797284;
  color: #fff;
  font-size: 2.5em;
  font-family: 'YUniverse-B';
  text-align: left;
  padding: 20px 50px;
  background-size: cover;
  background-position: center;
  height: 800px;
  border-radius: 7%;
  text-shadow: 2px 2px 1px #000;
`;

export default function MyPost() {
  const mypost = useSelector((state) => state.user.mypost);
  const page = useSelector((state) => state.window.page);
  const pagination = mypost.slice(page * 5, page * 5 + 5);

  return (
    <MyPostDiv>
      <Row gutter={30}>
        <Col span={12}>
          {mypost.length !== 0 ? (
            <ImgDiv img={pagination[0].img}>
              {pagination[0].country}, {pagination[0].city}
            </ImgDiv>
          ) : (
            <ImgDiv />
          )}
        </Col>
        <Col span={12}>
          <Row gutter={[30, 30]}>
            <PostImg pagi={pagination} />
          </Row>
        </Col>
      </Row>
      <MypagePagi arr={mypost} />
    </MyPostDiv>
  );
}
