import React, { useEffect, useRef, useState } from 'react';
import './Universe_Main.css';
import UniverseHM from '../../components/universe/UniverseHM';
import UniverseView from '../../components/universe/UniverseView';
import styled from 'styled-components';
import Button from 'antd/lib/button';
import UniverseBtn from '../../components/universe/UniverseBtn';
import { ArrowRightOutlined } from '@ant-design/icons';
import Tooltip from 'antd/lib/tooltip';
import DrawerToggler from '../../components/common/DrawerToggler';

const MyBG = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(https://images.unsplash.com/photo-1608178398319-48f814d0750c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=879&q=80);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -500;
`;
const MyBtn = styled(Button)`
  float: left;
  margin: 50px 0 0 50px;
  color: white;
  z-index: 50;
`;

export default function Universe_Main() {
  // const [showGame, setShowGame] = useState(false);
  const goPage = () => {
    location.href = '/universe/hangman';
    // setShowGame(!showGame);
  };

  return (
    <MyBG>
      <DrawerToggler />
      <Tooltip title="Go GAME">
        <MyBtn
          ghost
          size="large"
          icon={<ArrowRightOutlined color="white" />}
          onClick={goPage}
        />
      </Tooltip>
      <UniverseView />
      {/* {showGame || <UniverseView />}
      {showGame && <UniverseHM />} */}
    </MyBG>
  );
}
