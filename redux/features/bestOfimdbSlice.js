import { createSlice } from "@reduxjs/toolkit";

const bestOfImdbSlice = createSlice({
  name: "bestOfImdb",
  initialState: {
    initValue: [],
    clickedId: null,
  },
  reducers: {
    initValue: (state, action) => {
      state.clickedId = action.payload[0].id;
      state.initValue = [...action.payload];
    },
    setClickedId: (state, action) => {
      state.clickedId = action.payload;
    },
  },
});

export default bestOfImdbSlice.reducer;

export const { initValue, setClickedId } = bestOfImdbSlice.actions;
