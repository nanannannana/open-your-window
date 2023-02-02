import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MyToggler = styled.div`
  position: absolute;
  right: 20px;
  text-align: center;
`;

const NavLi = styled.div`
  padding: 30px 0 30px 0;
`;
const SignBtn = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
`;
const NavLinkSt = {
  color: 'lavender',
  fontSize: 'xx-large',
  fontWeight: 'bolder',
  margin: '30px 0 30px 0',
};

export default function DrawerToggler() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      {/* 좌측상단 이모지 absolute */}
      <div
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
      </div>
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
          <NavLi>
            <NavLink to="/" style={NavLinkSt}>
              Home
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/universe" style={NavLinkSt}>
              Universe
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/window" style={NavLinkSt}>
              Window
            </NavLink>
          </NavLi>
          <NavLi>
            <NavLink to="/mypage" style={NavLinkSt}>
              My Page
            </NavLink>
          </NavLi>
          <SignBtn>
            <NavLink to="/signin_up" style={NavLinkSt}>
              SignUp/SignIn
            </NavLink>
          </SignBtn>
        </Drawer>
      </MyToggler>
    </>
  );
}
