import React from 'react';
import styled from 'styled-components';
import Button from 'antd/lib/button';
import Tooltip from 'antd/lib/tooltip';
import { EastOutlined } from '@mui/icons-material';
import { WestOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router';

const MyBtn = styled(Button)`
  float: right;
  margin: 20px 100px 0 0;
  transform: scale(1.2);
`;

// const goPage = () => {
//   props.isGame
//     ? (location.href = '/universe/hangman')
//     : (location.href = '/universe');
// };

export default function UniverseBtn(props) {
  const { isGame } = props;
  const navigate = useNavigate();
  return (
    <>
      <Tooltip title={isGame ? 'Go UNIVERSE MAIN' : 'GO Game'}>
        <MyBtn
          type="text"
          size="large"
          icon={
            isGame ? (
              <WestOutlined color="white" />
            ) : (
              <EastOutlined color="white" />
            )
          }
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
