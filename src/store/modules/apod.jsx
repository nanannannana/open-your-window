import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { handleActions } from 'redux-actions';
import { getAPOD } from '../../apis/Nasa_API';

export const asyncUpFetch = createAsyncThunk(
  'asyncThunk/asyncUpFetch',
  async (date = ' ') => {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=SnhXUAk6vrVz2m05FXJ8KTUg7aa54Ak5nwKHHqOD&date=${date}`
    );
    const data = response.data;
    console.log(data);
    return data;
  }
);

export const asyncThunkSlice = createSlice({
  // createAsyncThunk의 액션 타입 문자열 앞부분과 동일하게 작성
  name: 'asyncThunk',
  initialState: {
    data: 0,
    loading: true,
  },
  // 비동기 작업에서는 action creator 자동 생성 X, 직접 생성
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(asyncUpFetch.rejected, (state, action) => {
      state.status = false;
    });
  },
});

// const PENDING = 'apod/APOD_PENDING';
// const SUCCESS = 'apod/APOD_SUCCESS';
// const FAILURE = 'apod/APOD_FAILURE';

// const initState = {
//   pending: false,
//   error: false,
//   data: {
//     title: '',
//     explaination: '',
//     url: '',
//   },
// };

// export const getPost = (date) => (dispatch) => {
//   // 요청의 시작 알림
//   dispatch({ type: PENDING });

//   return getAPOD(date)
//     .then((res) => {
//       // 요청 성공하면 응답 > payload (SUCCESS)
//       dispatch({ type: SUCCESS, payload: res });
//     })
//     .catch((err) => {
//       // 에러 발생하면 에러 > payload (FAILURE)
//       dispatch({ type: FAILURE, payload: error });
//       // error throw하여 추후 다시 catch할 수 있도록
//       throw error;
//     });
// };

// console.log(getPost('1993-11-15'));

// export default handleActions(
//   {
//     [PENDING]: (state, action) => {
//       return {
//         ...state,
//         pending: true,
//         error: false,
//       };
//     },
//     [SUCCESS]: (state, action) => {
//       const { title, explaination, url } = action.payload.data;
//       return {
//         ...state,
//         pending: false,
//         data: {
//           title,
//           explaination,
//           url,
//         },
//       };
//     },
//     [FAILURE]: (state, action) => {
//       return { ...state, pending: false, error: true };
//     },
//   },
//   initState
// );
