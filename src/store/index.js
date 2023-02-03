import { combineReducers } from 'redux';
import { asyncThunkSlice } from './modules/apod';
import window from './modules/window';
import mypage from './modules/mypage';

export default combineReducers({
  window,
  asyncThunk: asyncThunkSlice.reducer,
  mypage,
});
