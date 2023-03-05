import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import PostImg from './PostImg';
import { useSelector } from 'react-redux';
import MypagePagi from './MypagePagi';
import { useNavigate } from 'react-router';

const MyPostDiv = styled.div`
  margin: 3% 0;
`;
const ImgDiv = styled.div`
  background-image: url(${(props) => props.img});
  background-color: lavender;
  color: #fff;
  font-size: 2.5em;
  font-family: 'YUniverse-B';
  text-align: left;
  padding: 4% 5%;
  background-size: cover;
  background-position: center;
  height: 63vh;
  border-radius: 7%;
  text-shadow: 2px 2px 1px #000;
`;

export default function MyPost() {
  const navigate = useNavigate();
  const mypost = useSelector((state) => state.mypage.mypost);
  const page = useSelector((state) => state.window.page);
  const pagination = mypost.slice(page * 5, page * 5 + 5);

  return (
    <MyPostDiv>
      <Row gutter={{ md: 20, xxl: 30 }}>
        <Col span={12}>
          {mypost.length !== 0 ? (
            <ImgDiv
              img={pagination[0].img}
              onClick={() =>
                navigate('/window/postedit', {
                  replace: true,
                  state: { num: pagination[0].num, mypage: 'mypage' },
                })
              }
            >
              {pagination[0].country}, {pagination[0].city}
            </ImgDiv>
          ) : (
            <ImgDiv />
          )}
        </Col>
        <Col span={12}>
          <Row
            gutter={[
              { md: 20, xxl: 30 },
              { md: 15, xxl: 30 },
            ]}
          >
            <PostImg pagi={pagination} />
          </Row>
        </Col>
      </Row>
      <MypagePagi arr={mypost} />
    </MyPostDiv>
  );
}
