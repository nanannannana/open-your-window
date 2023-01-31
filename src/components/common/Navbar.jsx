import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './Navbar.css';

const NavUl = styled.div`
  height: 500px;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 500;
  margin-top: 20px;
`;
const NavLi = styled.div`
  position: absolute;
  right: 50px;
  top: 100px;
  margin: 50px 30px 0 30px;
  font-size: x-large;
  width: 100px;
  height: 50px;
  z-index: 500;
`;

export default function Navbar() {
  let activeStyle = {
    fontWeight: 'bolder',
    fontSize: 'xx-large',
    color: 'white',
  };
  return (
    <>
      <NavUl>
        <NavLi>
          <NavLink
            style={({ isActive }) => {
              isActive ? activeStyle : undefined;
            }}
            to="/"
          >
            Home
          </NavLink>
        </NavLi>
        <NavLi style={{ top: '200px' }}>
          <NavLink to="/universe">Universe</NavLink>
        </NavLi>
        <NavLi style={{ top: '300px' }}>
          <NavLink
            style={({ isActive }) => {
              isActive ? activeStyle : undefined;
            }}
            to="/window"
          >
            Window
          </NavLink>
        </NavLi>
      </NavUl>
    </>
  );
}
