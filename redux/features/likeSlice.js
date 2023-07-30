import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "like",
  initialState: [],
  reducers: {
    setLike: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index === -1) {
        state.push({ ...action.payload });
      } else {
        state.splice(index, 1);
      }
    },
  },
});

export const { setLike } = likeSlice.actions;
export default likeSlice.reducer;
