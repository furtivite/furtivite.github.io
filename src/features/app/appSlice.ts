import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  isInit: boolean;
}

const initialState: AppState = {
  isInit: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    initApp: (state) => {
      state.isInit = true;
    },
  },
});

export const { initApp } = appSlice.actions;
export default appSlice.reducer;
