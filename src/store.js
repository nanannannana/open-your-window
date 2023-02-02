// import { createStore, applyMiddleware, compose } from 'redux';
// import modules from './modules';

import { configureStore } from '@reduxjs/toolkit';
import { asyncThunkSlice } from './store/modules/apod';

// const configure = () => {
//   const devTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
//   const composeEnhancers = devTools || compose;

//   const middlewares = []; // 나중에 이 자리에 미들웨어 추가

//   const store = createStore(
//     modules,
//     composeEnhancers(applyMiddleware(...middlewares))
//   );

//   return store;
// };

// export default configure;

export const store = configureStore({
  reducer: {
    asyncThunk: asyncThunkSlice.reducer,
  },
});
