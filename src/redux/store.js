import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from "./slices/AuthSlice";
import NoteSliceReducer from "./slices/NoteSlice";

const store = configureStore({
  reducer: {
    auth: AuthSliceReducer,
    note: NoteSliceReducer
  },
  devTools: true,
});

export default store;
