import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DrawerToggler from '../components/common/DrawerToggler';
import MyPost from '../components/mypage/MyPost';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeReset,
  update,
  goInfo,
  infochange,
} from '../store/modules/mypage';
import { pagereset } from '../store/modules/window';
import { BsFillPencilFill, BsBrightnessHighFill } from 'react-icons/bs';
import MyInfo from '../components/mypage/MyInfo';
import { Modal } from 'antd';
import { useNavigate } from 'react-router';

const { warning } = Modal;

const OutBox = styled.div`
  /* padding: 170px 300px; */
  padding: 5% 15%;
  height: 100vh;
`;
const Username = styled.div`
  font-size: 3em;
  margin: 0 0 10px 0;
  @media (max-width: 1440px) {
    font-size: 2.5em;
    margin: 0 0 5px 0;
  }
`;
const UserEmail = styled.div`
  font-size: 1em;
  display: inline;
  margin-right: 5px;
`;
const PostIcon = styled(BsBrightnessHighFill)`
  margin-right: 5px;
`;
const EmailandIconBox = styled.div`
  text-align: center;
`;

export default function MyPage_Main() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user_id = localStorage.getItem('userid');
  const userInfo = useSelector((state) => state.mypage.userInfo);
  const change = useSelector((state) => state.mypage.change);

  useEffect(() => {
    if (!user_id) {
      warning({
        title: '로그인이 필요합니다!',
        content: '버튼을 누르면 로그인 페이지로 이동합니다.',
        onOk() {
          navigate('/user/signin');
        },
      });
    } else {
      async function fectchData() {
        return await axios
          .post(`http://${process.env.REACT_APP_HOST}/mypage/userinfofind`, {
            user_id: user_id,
          })
          .then((res) => {
            dispatch(infochange(res.data.userInfo));
            // 업로드한 게시물 존재 유무
            if (res.data.showPosts) dispatch(update(res.data.showPosts));
          })
          .catch((err) => console.log(err));
      }
      fectchData();
      dispatch(pagereset());
      dispatch(changeReset());
    }
  }, []);

  if (!user_id) return <div></div>;

  return (
    <>
      <DrawerToggler />
      <OutBox>
        {userInfo.length !== 0 ? (
          <>
            <Username>{userInfo['user_name']}</Username>
            <EmailandIconBox>
              <UserEmail>{user_id}</UserEmail>
              <PostIcon size="17" onClick={() => dispatch(changeReset())} />
              <BsFillPencilFill size="15" onClick={() => dispatch(goInfo(2))} />
            </EmailandIconBox>
            {change === 1 ? <MyPost /> : <MyInfo />}
          </>
        ) : (
          true
        )}
      </OutBox>
    </>
  );
}
