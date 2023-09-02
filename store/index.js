import { configureStore } from "@reduxjs/toolkit";
import wordSlice from './word-Slice';

const store = configureStore({
  reducer: { word: wordSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});
export default store;
