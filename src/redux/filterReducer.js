import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = slice.reducer;
export const { addFilter } = slice.actions;
