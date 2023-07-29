import { configureStore } from "@reduxjs/toolkit";
import bestOfImdbSlice from "@/redux/features/bestOfimdbSlice";
import bookMarkSlice from "./features/bookMarkSlice";

const store = configureStore({
  reducer: {
    bestOfImdb: bestOfImdbSlice,
    bookmark: bookMarkSlice,
  },
});

export default store;
