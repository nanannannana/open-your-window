import React, { useRef } from 'react';
import styled from 'styled-components';
import Toggler from '../../components/common/Toggler';
import UniverseHM from '../../components/universe/UniverseHM';
import Button from 'antd/lib/button';
import UniverseBtn from '../../components/universe/UniverseBtn';
import { Tooltip } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
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

export default function Universe_HM() {
  const showGameRef = useRef(true);

  const goPage = () => {
    location.href = '/universe';
  };

  return (
    <MyBG>
      <DrawerToggler />
      <Tooltip title="Go UNIVERSE MAIN">
        <MyBtn
          ghost
          size="large"
          icon={<ArrowLeftOutlined color="white" />}
          onClick={goPage}
        />
      </Tooltip>
      <UniverseHM />
    </MyBG>
  );
}
