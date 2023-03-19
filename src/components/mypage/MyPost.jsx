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

export default function MyPost({ postTotalNum }) {
  const navigate = useNavigate();
  // 내가 올린 게시물 정보가 담긴 state
  const mypost = useSelector((state) => state.mypage.mypost);

  return (
    <MyPostDiv>
      <Row gutter={{ md: 20, xxl: 30 }}>
        <Col span={12}>
          {mypost.length !== 0 ? (
            <ImgDiv
              img={mypost[0].img}
              onClick={() =>
                navigate('/window/postedit', {
                  replace: true,
                  state: { num: mypost[0].num, mypage: 'mypage' },
                })
              }
            >
              {mypost[0].country}, {mypost[0].city}
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
            <PostImg />
          </Row>
        </Col>
      </Row>
      <MypagePagi postTotalNum={postTotalNum} />
    </MyPostDiv>
  );
}
