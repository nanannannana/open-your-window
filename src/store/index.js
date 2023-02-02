import { combineReducers } from 'redux';
import { asyncThunkSlice } from './modules/apod';
import window from './modules/window';

export default combineReducers({
  window,
  asyncThunk: asyncThunkSlice.reducer,
});
