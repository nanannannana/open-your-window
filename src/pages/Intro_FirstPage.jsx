import React, { useState } from 'react';
import styled from 'styled-components';
import DrawerToggler from '../components/common/DrawerToggler';
import GlobalStyle from '../components/common/GlobalStyle';
import FirstPage from '../components/intro/FirstPage';
import SecondPage from '../components/intro/SecondPage';

export default function Intro_FirstPage() {
  const [main, setMain] = useState(1);
  const view = main === 1 ? <FirstPage setMain={setMain} /> : <SecondPage />;
  return (
    <>
      <GlobalStyle />
      {view}
    </>
  );
}
