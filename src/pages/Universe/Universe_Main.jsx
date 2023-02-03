import React, { useEffect, useRef, useState } from 'react';
import './Universe_Main.css';
import styled from 'styled-components';
import Button from 'antd/lib/button';
import UniverseBtn from '../../components/universe/UniverseBtn';
import { ArrowRightOutlined } from '@ant-design/icons';
import Tooltip from 'antd/lib/tooltip';
import DrawerToggler from '../../components/common/DrawerToggler';
import { useSelector } from 'react-redux';
import UniverseViewer from '../../components/universe/UniverseViewer';

const MyBG = styled.div`
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -500;
`;
const MyBtn = styled(Button)`
  float: left;
  margin: 50px 0 0 50px;
`;

export default function Universe_Main() {
  // const {url} = useSelector((state) => {return state.asyncThunk.data});

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
    </MyBG>
  );
}
