import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedTab: 'Home',
};

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setSelectedTab(state, {payload}) {
      return {
        selectedTab: payload,
      };
    },
  },
});

export const {setSelectedTab} = tabSlice.actions;

export default tabSlice.reducer;
