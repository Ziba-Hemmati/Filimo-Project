import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import bestOfImdbSlice from "@/redux/features/bestOfimdbSlice";
import bookMarkSlice from "./features/bookMarkSlice";
import likeSlice from "./features/likeSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  bestOfImdb: bestOfImdbSlice,
  bookmark: bookMarkSlice,
  like: likeSlice,
});

const persistReducer1 = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistReducer1,
  middleware: [],
});

export const persistor = persistStore(store);
export default store;
