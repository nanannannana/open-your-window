import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MyToggler = styled.div`
  float: right;
  margin-right: 20px;
  text-align: center;
`;

const NavLi = styled.div`
  padding: 30px 0 30px 0;
`;
const NavLinkSt = {
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
    <MyToggler>
      <Button type="link" onClick={showDrawer}>
        <MenuOutlined style={{ fontSize: '30px', color: 'lavender' }} />
      </Button>
      <Drawer title="MENU" placement="right" onClose={onClose} open={open}>
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
      </Drawer>
    </MyToggler>
  );
}
