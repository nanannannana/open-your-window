const initState = {
  userid: '',
};

// ACTION TYPE
const USERID = 'user/USERID';
const USEROUT = 'user/USEROUT';

// 액션 생성 함수
export const setUser = (userid) => ({ type: USERID, payload: userid });
export const delUser = () => ({ type: USEROUT });

// REDUCER
export default function users(state = initState, action) {
  switch (action.type) {
    case USERID:
      return { ...state, userid: action.payload.userid };
    case USEROUT:
      return { ...state, userid: '' };
    default:
      return state;
  }
}
