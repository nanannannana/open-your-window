import React from 'react';

const wordList = [
  [
    'MERCURY',
    'VENUS',
    'EARTH',
    'MARS',
    'JUPITER',
    'SATURN',
    'URANOS',
    'NEPTUNE',
  ],
  [
    'METEOR',
    'ORBIT',
    'COMET',
    'BLACKHOLE',
    'INTERSTELLAR',
    'SATELLITE',
    'MILKYWAY',
    'SUPERNOVA',
    'ALIEN',
    'MOON',
    'SUN',
  ],
  [
    'ASTRONAUT',
    'TWILIGHT',
    'AURORA',
    'ECLIPSE',
    'POLARIS',
    'GEMINI',
    'HORIZON',
    'GRAVITY',
    'TELESCOPE',
    'SPACESHIP',
    'GALAXY',
  ],
];

function UniverseHMWords() {
  var idx = ~~(Math.random() * (wordList.length - 0.01));
  // console.log(idx);
  // console.log(wordList, wordList.length);
  return [
    wordList[idx][~~(Math.random() * (wordList[idx].length - 0.01))],
    idx,
  ];
}

export { UniverseHMWords };
