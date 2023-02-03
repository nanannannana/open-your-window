import { combineReducers } from 'redux';
// import persistReducer from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
import { asyncThunkSlice } from './modules/apod';
import window from './modules/window';
import mypage from './modules/mypage';
import users from './modules/users';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['users'],
// };

export default combineReducers({
  window,
  asyncThunk: asyncThunkSlice.reducer,
  users,
  mypage,
});

// export default persistReducer(persistConfig, rootReducer);
