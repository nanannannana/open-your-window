// const initState = {
//   idx: 0,
//   newAnswer: '',
//   newHint: '',
// };

// const wordList = [
//   [
//     'MERCURY',
//     'VENUS',
//     'EARTH',
//     'MARS',
//     'JUPITER',
//     'SATURN',
//     'URANOS',
//     'NEPTUNE',
//   ],
//   [
//     'METEOR',
//     'ORBIT',
//     'COMET',
//     'BLACKHOLE',
//     'INTERSTELLAR',
//     'SATELLITE',
//     'MILKYWAY',
//     'SUPERNOVA',
//     'ALIEN',
//     'MOON',
//     'SUN',
//   ],
//   [
//     'ASTRONAUT',
//     'TWILIGHT',
//     'AURORA',
//     'ECLIPSE',
//     'POLARIS',
//     'GEMINI',
//     'HORIZON',
//     'GRAVITY',
//     'TELESCOPE',
//     'SPACESHIP',
//     'GALAXY',
//   ],
// ];

// const hintArr = [
//   'This is a planet',
//   'This is part of our galaxy out of the Earth',
//   'You can see or feel this on Earth',
// ];

// // ACTION TYPE
// const GETWORD = 'hmWords/GETWORD';

// // 액션 생성 함수
// export const getWord = (idx) => ({ type: GETWORD, payload: idx });

// //REDUCER
// export default function hmWords(state = initState, action) {
//   switch (action.type) {
//     case GETWORD:
//       return {
//         ...state,
//         idx: action.payload.idx,
//         newAnswer:
//           wordList[action.payload.idx][
//             ~~(Math.random() * (wordList[action.payload.idx].length - 0.01))
//           ],
//         newHint: hintArr[action.payload.idx],
//       };
//     default:
//       return state;
//   }
// }
