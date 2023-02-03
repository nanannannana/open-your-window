// 초기 상태 설정
const initState = {
  switch: 1,
  change: 1,
  carouselNum: 0,
  page: 0,
  searchTag: [],
  userId: '',
};

// 액션 타입 설정
const SWITCH = 'window/SWITCH';
const UNSWITCH = 'window/UNSWITCH';
const GO = 'window/GO';
const BACK = 'window/BACK';
const NUMCHANGE = 'window/NUMCHANGE';
const PAGECHANGE = 'window/PAGECHANGE';
const PAGERESET = 'window/PAGERESET';
const TAGCHANGE = 'window/TAGCHANGE';
const SEARCHRESET = 'window/SEARCHRESET';
const USERID = 'window/USERID';

// 액션 생성 함수 작성
export const switching = () => ({ type: SWITCH });
export const unswitch = () => ({ type: UNSWITCH });
export const go = () => ({ type: GO });
export const back = () => ({ type: BACK });
export const numchange = (num) => ({ type: NUMCHANGE, payload: num });
export const pageChange = (page) => ({ type: PAGECHANGE, payload: page });
export const pagereset = () => ({ type: PAGERESET });
export const tagchange = (tag) => ({ type: TAGCHANGE, payload: tag });
export const searchreset = () => ({ type: SEARCHRESET });
export const userId = (userId) => ({ type: USERID, payload: userId });

// 리듀서 설정
export default function window(state = initState, action) {
  switch (action.type) {
    case SWITCH:
      return { ...state, switch: 2 };
    case UNSWITCH:
      return { ...state, switch: 1 };
    case GO:
      return { ...state, change: 2 };
    case BACK:
      return { ...state, change: 1 };
    case NUMCHANGE:
      return { ...state, carouselNum: action.payload };
    case PAGECHANGE:
      return { ...state, page: action.payload - 1 };
    case PAGERESET:
      return { ...state, page: 0 };
    case TAGCHANGE:
      return { ...state, searchTag: action.payload };
    case SEARCHRESET:
      return { ...state, searchTag: [] };
    case USERID:
      return { ...state, userId: action.payload };
    default:
      return state;
  }
}
