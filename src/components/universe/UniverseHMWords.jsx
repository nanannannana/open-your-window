import Button from 'antd/lib/button';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { UniverseHMQuiz } from './UniverseHMQuiz';
import { HeartTwoTone, setTwoToneColor } from '@ant-design/icons';

setTwoToneColor('slateblue');

const Div1 = styled.div`
  text-align: center;
  color: whitesmoke;
`;
const MyDiv = styled.div`
  height: 40vh;
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
`;

const ABCbtn = styled(Button)`
  display: inline-block;
  padding: 10px;
  background-color: lavender;
  margin: 0 10px 0 10px;
`;
const BtnArr = styled.div`
  width: 100vw;
  padding: 20px 0 20px 0;
`;

export default function UniverseHMWords() {
  const [count, setCount] = useState(5);
  const [answer, setAnswer] = useState(UniverseHMQuiz());
  const [guessed, setGuessed] = useState([]);

  const showWord = () => {
    console.log('1', guessed);
    return [...answer].map((el, idx) => (guessed.includes(el) ? el : ' _ '));
  };

  function checkAnswer(e) {
    let letter = e.currentTarget.value;
    setGuessed([...guessed, letter]);
    answer.includes(letter) ? showWord() : setCount(count - 1);
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
        size={'large'}
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
        size={'large'}
        disabled={guessed.includes(el)}
        onClick={checkAnswer}
      >
        {el}
      </ABCbtn>
    ));
  };

  return (
    <Div1>
      <MyDiv>
        <MySpan>{showWord()}</MySpan>
      </MyDiv>
      <div
        style={{
          fontSize: '30px',
          fontWeight: 'bolder',
          margin: '10px 0 10px 0',
        }}
      >
        {count < 0
          ? 'You LOSE'
          : answer === showWord().join('')
          ? 'You WIN'
          : [...Array(count + 1)].map((_, i) => (
              <span key={i}>
                <HeartTwoTone style={{ fontSize: '70px' }} />
              </span>
            ))}
      </div>
      <BtnArr>{btnGernerator1()}</BtnArr>
      <BtnArr>{btnGernerator2()}</BtnArr>
    </Div1>
  );
}
