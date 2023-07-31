import { createSlice } from "@reduxjs/toolkit";

const bookMarkSlice = createSlice({
  name: "bookmark",
  initialState: [],
  reducers: {
    setBookmark: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index === -1) {
        state.push({...action.payload });
      } else {
        state.splice(index, 1);
      }
    },
  },
});

export const { setBookmark } = bookMarkSlice.actions;
export default bookMarkSlice.reducer;
