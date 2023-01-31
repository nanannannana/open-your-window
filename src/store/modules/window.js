// 초기 상태 설정
const initState = {
  change: 1,
  carouselNum: 0,
};

// 액션 타입 설정
const REVERSE = 'window/REVERSE';
const BACK = 'window/BACK';
const NUMCHANGE = 'window/NUMCHANGE';

// 액션 생성 함수 작성
export const reverse = () => ({ type: REVERSE });
export const back = () => ({ type: BACK });
export const numchange = (num) => ({ type: NUMCHANGE, payload: num });

// 리듀서 설정
export default function window(state = initState, action) {
  switch (action.type) {
    case REVERSE:
      return { ...state, change: 2 };
    case BACK:
      return { ...state, change: 1 };
    case NUMCHANGE:
      return { ...state, carouselNum: action.payload };
    default:
      return state;
  }
}
