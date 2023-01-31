import React, { useState } from 'react';
import UniverseHMWords from './UniverseHMWords';
import Button from 'antd/lib/button';
import styled from 'styled-components';

const MyBtn = styled(Button)`
  margin-top: 20px;
`;

export default function UniverseHM() {
  const [game, setGame] = useState(false);

  const startGame = () => {
    setGame(!game);
  };

  return (
    <>
      <MyBtn size={'large'} shape="round" onClick={startGame}>
        {game ? 'Quit' : 'Start HangMan'}
      </MyBtn>
      {game && <UniverseHMWords />}
    </>
  );
}
