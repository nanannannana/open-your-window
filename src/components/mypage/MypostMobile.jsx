import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import MypagePagi from './MypagePagi';
import styled from 'styled-components';

const Posts = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-color: lavender;
  border-radius: 10px;
  height: 25%;
  margin: 5% 0;
  padding: 2% 0;
  font-size: 1.5em;
  color: #fff;
  text-shadow: 2px 2px 1px #000;
`;

export default function MypostMobile({ postTotalNum }) {
  const navigate = useNavigate();
  const mypost = useSelector((state) => state.mypage.mypost);
  console.log('mypost', mypost.length);

  return (
    <>
      {mypost.length !== 0 &&
        mypost.map((v, i) => (
          <Posts
            key={i}
            img={v.img}
            onClick={() =>
              navigate('/window/postedit', {
                state: { num: v.num, mypage: 'mypage' },
              })
            }
          >
            {v.country}, {v.city}
          </Posts>
        ))}
      <MypagePagi postTotalNum={postTotalNum} />
    </>
  );
}
