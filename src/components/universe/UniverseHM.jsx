import React, { useState } from 'react';
import UniverseHMPlayer from './UniverseHMPlayer';
import Button from 'antd/lib/button';
import styled from 'styled-components';
const HMContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HMBtn = styled(Button)`
  width: 300px;
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  font-family: Georgia, 'Times New Roman', Times, serif;
`;

export default function UniverseHM() {
  const [game, setGame] = useState(false);

  const startGame = () => {
    setGame(!game);
  };

  return (
    <HMContainer>
      <HMBtn type="text" shape="round" onClick={startGame}>
        {game ? 'Quit' : 'Play HANGMAN'}
      </HMBtn>
      {game && <UniverseHMPlayer />}
    </HMContainer>
  );
}
