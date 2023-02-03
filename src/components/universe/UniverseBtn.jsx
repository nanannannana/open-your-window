import React from 'react';
import './UniverseBtn.css';
import styled from 'styled-components';
import Button from 'antd/lib/button';
import Tooltip from 'antd/lib/tooltip';
import { PictureFilled, RocketFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const MyBtn = styled(Button)`
  float: right;
  margin: 20px 100px 0 0;
  transform: scale(1.7);
`;

export default function UniverseBtn(props) {
  const { isGame } = props;
  const navigate = useNavigate();
  return (
    <>
      <Tooltip title={isGame ? 'Go UNIVERSE MAIN' : 'GO Game'}>
        <MyBtn
          className="Univ_navBtn"
          type="text"
          size="large"
          icon={isGame ? <PictureFilled /> : <RocketFilled />}
          onClick={() => {
            isGame
              ? navigate('/universe', { replace: true })
              : navigate('hangman');
          }}
        />
      </Tooltip>
    </>
  );
}
