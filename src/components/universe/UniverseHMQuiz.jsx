import React from 'react';

const wordList = [
  'EARTH',
  'JUPITER',
  'MERCURY',
  'SATELLITE',
  'ASTRONAUT',
  'MILKYWAY',
  'SOLARSYSTEM',
  'VENUS',
  'ORBIT',
  'COMET',
];

function UniverseHMQuiz() {
  return wordList[~~(Math.random() * (wordList.length - 0.01))];
}

export { UniverseHMQuiz };
