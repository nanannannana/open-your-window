// const initState = {
//   list: [
//     { id: 0, text: 'EARTH', done: false },
//     { id: 1, text: 'JUPITER', done: false },
//     { id: 2, text: 'MERCURY', done: false },
//     { id: 3, text: 'SATELLITE', done: false },
//     { id: 4, text: 'ASTRONAUT', done: false },
//     { id: 5, text: 'MILKYWAY', done: false },
//     { id: 6, text: 'SOLARSYSTEM', done: false },
//     { id: 7, text: 'VENUS', done: false },
//     { id: 8, text: 'ORBIT', done: false },
//     { id: 9, text: 'COMET', done: false },
//   ],
// };

// const mission = () => list[~~(Math.random() * 9.99)];

// // let count = ~~(Math.random() * 9.99);

// const CHECK = 'hm/CHECK';
// const CORRECT = 'hm/CORRECT';

// export function check(payload) {
//   return {
//     type: CHECK,
//     payload,
//   };
// }
// export function correct(letter) {
//   return {
//     type: CORRECT,
//     text,
//   };
// }

// export default function checkHM(state = mission, action) {
//   switch (action.type) {
//     case CHECK:
//       return { state };
//     case CORRECT:
//       return { state };
//     default:
//       return state;
//   }
// }
