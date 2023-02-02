import { combineReducers } from 'redux';
import { asyncThunkSlice } from './modules/apod';
import window from './modules/window';
import user from './modules/user';

export default combineReducers({
  window,
  asyncThunk: asyncThunkSlice.reducer,
  user,
});
