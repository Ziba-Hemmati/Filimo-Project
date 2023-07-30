import { configureStore } from "@reduxjs/toolkit";
import bestOfImdbSlice from "@/redux/features/bestOfimdbSlice";
import bookMarkSlice from "./features/bookMarkSlice";
import likeSlice from "./features/likeSlice";

const store = configureStore({
  reducer: {
    bestOfImdb: bestOfImdbSlice,
    bookmark: bookMarkSlice,
    like: likeSlice,
  },
});

export default store;
