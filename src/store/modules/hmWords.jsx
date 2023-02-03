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

const hintArr = [
  'This is a planet',
  'This is part of our galaxy out of the Earth',
  'You can see or feel this on Earth',
];

const initState = {
  idx: 0,
  answer: '',
  hint: '',
};

// ACTION TYPE
const GETWORD = 'user/GETWORD';

// 액션 생성 함수
export const getWord = () => ({ type: GETWORD });

//REDUCER
export default function hmWords(state = initState, action) {
  switch (action.type) {
    case GEETWORD:
      return {
        ...state,
        idx: ~~(Math.random() * (wordList.length - 0.01)),
        answer:
          wordList[idx][~~(Math.random() * (wordList[idx].length - 0.01))],
        hint: hintArr[idx],
      };
  }
}
