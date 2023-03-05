import React from 'react';
import Window_Map from './Window_Map';
import {
  Laptop,
  Desktop,
  Tablet,
  Mobile,
} from '../../components/common/Responsive';

export default function Map_responsive() {
  return (
    <>
      <Desktop>
        <Window_Map viewBox="30 0 850 500" />
      </Desktop>
      <Laptop>
        <Window_Map viewBox="30 -50 850 550" />
      </Laptop>
      <Tablet>
        <Window_Map viewBox="25 -130 850 650" />
      </Tablet>
      <Mobile>
        <Window_Map viewBox="25 -250 850 800" />
      </Mobile>
    </>
  );
}
