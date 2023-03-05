import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { delUser } from '../../store/modules/users';
import SearchBar from '../common/SearchBar';
import axios from 'axios';
import { mypageclear } from '../../store/modules/mypage';

const KKLogOut = `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_REST_API_KEY}&logout_redirect_uri=${process.env.REACT_APP_LOGOUT_REDIRECT_URI}`;

const MyToggler = styled.div`
  position: absolute;
  right: 20px;
  text-align: center;
`;

const NavEl = styled.div`
  padding: 30px 0 30px 0;
  font-family: 'YUniverse-B';
`;
const SignBtn = styled.div`
  font-family: 'YUniverse-B';
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: 'lavender';
  font-size: 'xx-large';
  font-weight: 'bolder';
  margin: '30px 0 30px 0';
`;

const NavLinkSt = {
  color: 'lavender',
  fontSize: 'xx-large',
  fontWeight: 'bolder',
  margin: '30px 0 30px 0',
};

export default function DrawerToggler() {
  const [open, setOpen] = useState(false);
  let userid = useSelector((state) => state.users.userid);
  userid = localStorage.getItem('userid');
  const isKakao = localStorage.getItem('isKakao');

  const dispatch = useDispatch();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <GlobalStyle />
      {/* 좌측상단 이모지 absolute */}
      {/* <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          zIndex: '500',
        }}
      >
        <img
          src="/milkyway.png"
          style={{
            width: '50px',
            height: '50px',
          }}
        />
      </div> */}
      {/* 우측상단 토글버튼, Navbar absolute */}

      <MyToggler>
        <div onClick={showDrawer}>
          <MenuOutlined
            style={{
              fontSize: '40px',
              color: 'lavender',
              margin: '20px 20px 0 0',
            }}
          />
        </div>
        <Drawer
          title="MENU"
          placement="right"
          onClose={onClose}
          open={open}
          style={{ position: 'absolute', zIndex: '500' }}
        >
          <NavEl>
            <Link to="/" style={NavLinkSt}>
              Home
            </Link>
          </NavEl>
          <NavEl>
            <Link to="/universe" style={NavLinkSt}>
              Universe
            </Link>
          </NavEl>
          <NavEl>
            <Link to="/window" style={NavLinkSt}>
              Window
            </Link>
          </NavEl>
          {/* <NavEl>
            <Link to={KKLogOut}>Kakao Logout</Link>
          </NavEl> */}

          {/* 로그인 시 마이페이지 & 로그아웃 보이기*/}
          {userid ? (
            <>
              <NavEl>
                <Link to="/mypage" style={NavLinkSt}>
                  My Page
                </Link>
              </NavEl>
              {/* SearchBar */}
              <NavEl>
                <SearchBar />
              </NavEl>
              <SignBtn>
                <Link
                  to={isKakao ? KKLogOut : '/'}
                  style={NavLinkSt}
                  onClick={() => {
                    dispatch(delUser());
                    localStorage.clear();
                    dispatch(mypageclear());
                  }}
                >
                  Log Out
                </Link>
              </SignBtn>
            </>
          ) : (
            <SignBtn>
              <Link to="/user/signin" style={NavLinkSt}>
                SignUp/SignIn
              </Link>
            </SignBtn>
          )}
        </Drawer>
      </MyToggler>
    </>
  );
}
