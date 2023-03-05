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

function HMWords() {
  var idx = ~~(Math.random() * (wordList.length - 0.01));

  return [
    wordList[idx][~~(Math.random() * (wordList[idx].length - 0.01))],
    idx,
  ];
}

export { HMWords };
