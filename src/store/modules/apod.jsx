import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const asyncUpFetch = createAsyncThunk(
  'asyncThunk/asyncUpFetch',
  async (date = ' ') => {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=SnhXUAk6vrVz2m05FXJ8KTUg7aa54Ak5nwKHHqOD&date=${date}`
    );
    const data = response.data;
    console.log(data.title);
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
