import Button from 'antd/lib/button';
import React, { useState } from 'react';
import styled from 'styled-components';
import { UniverseHMWords } from './UniverseHMWords';
// import { HeartTwoTone, setTwoToneColor } from '@ant-design/icons';
import { FavoriteOutlined } from '@mui/icons-material';
// import { Modal } from 'antd';
import UniverseHMReset from './UniverseHMReset';

// setTwoToneColor('slateblue');

const HMContainer = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: whitesmoke;
`;

const HintBtn = styled(Button)`
  color: rgb(116, 141, 129);
  font-size: xx-large;
  font-family: 'YUniverse-B';
`;
const WordArr = styled.div`
  height: 30vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MySpan = styled.span`
  display: inline-block;
  font-size: 8em;
  font-weight: bolder;
  margin: 0 15px 0 15px;
  font-family: 'YUniverse-B';
`;

const ABCbtn = styled(Button)`
  display: inline-block;
  font-size: xx-large;
  font-family: 'YUniverse-B';
  color: slateblue;
  width: 100px;
  height: 100px;
  padding: 10px;
  background-color: lavender;
  margin: 0 10px 0 10px;
`;
const BtnArr = styled.div`
  width: 100vw;
  padding: 20px 0 20px 0;
`;
// Component 시작 ///////////////
export default function UniverseHMPlayer() {
  const [count, setCount] = useState(5);
  const [answer, setAnswer] = useState(UniverseHMWords());
  const [hint, setHint] = useState('HINT');
  const [guessed, setGuessed] = useState([]);
  // const [isModal, setIsModal] = useState(false);

  const showWord = () => {
    console.log('1', guessed);
    return [...answer[0]].map((el) => (guessed.includes(el) ? el : ' _ '));
  };

  const showHint = () => {
    setHint(
      [
        'This is a planet',
        'This is part of our galaxy out of the Earth',
        'You can see or feel this on Earth',
      ][answer[1]]
    );
  };

  function checkAnswer(e) {
    let letter = e.currentTarget.value;
    setGuessed([...guessed, letter]);
    answer[0].includes(letter) ? showWord() : setCount(count - 1);
    console.log('2', letter);
    console.log(count);
  }

  const btnGernerator1 = () => {
    return [...'ABCDEFGHIJKLM'].map((el, idx) => (
      <ABCbtn
        key={idx}
        value={el}
        type="text"
        shape="circle"
        disabled={guessed.includes(el)}
        onClick={checkAnswer}
      >
        {el}
      </ABCbtn>
    ));
  };
  const btnGernerator2 = () => {
    return [...'NOPQRSTUVWXYZ'].map((el, idx) => (
      <ABCbtn
        key={idx + 13}
        value={el}
        type="text"
        shape="circle"
        disabled={guessed.includes(el)}
        onClick={checkAnswer}
      >
        {el}
      </ABCbtn>
    ));
  };

  /////// UI 시작 ////////////////////////////////
  return (
    <HMContainer>
      <HintBtn type="link" onClick={showHint}>
        {hint}
      </HintBtn>
      <WordArr>
        <MySpan>{showWord()}</MySpan>
      </WordArr>
      <div
        style={{
          fontSize: '30px',
          fontWeight: 'bolder',
          margin: '10px 0 10px 0',
        }}
      >
        {count < 0 || answer[0] === showWord().join('') ? (
          <UniverseHMReset count={count} answer={answer} />
        ) : (
          [...Array(count + 1)].map((_, i) => (
            <span key={i}>
              <FavoriteOutlined
                style={{ fontSize: '70px', margin: '0 5px 5px 5px' }}
              />
            </span>
          ))
        )}
      </div>
      <BtnArr>{btnGernerator1()}</BtnArr>
      <BtnArr>{btnGernerator2()}</BtnArr>
    </HMContainer>
  );
}
