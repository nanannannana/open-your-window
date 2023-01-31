import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from 'antd/lib/button';

const MyBtn = styled(Button)`
  float: right;
  margin-right: 50px;
  color: white;
  z-index: 50;
`;

export default function UniverseBtn() {
  const goPage = () => {
    location.href = showGameRef.current ? '/universe/hangman' : '/universe';
    showGameRef.current = !showGameRef.current;
  };

  return (
    <>
      <MyBtn type="text" size="large" onClick={goPage}>
        {showGameRef.current ? 'MAIN으로' : 'Game으로'}
      </MyBtn>
    </>
  );
}
