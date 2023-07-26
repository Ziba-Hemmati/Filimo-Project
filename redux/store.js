import { configureStore } from "@reduxjs/toolkit";
import bestOfImdbSlice from "@/redux/features/bestOfimdbSlice";

const store = configureStore({
  reducer: {
    bestOfImdb: bestOfImdbSlice,
  },
});

export default store;
