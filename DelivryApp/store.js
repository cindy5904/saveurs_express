import { configureStore } from "@reduxjs/toolkit";
import commandReducer from "./slices/commandSlice";

export default configureStore({
  reducer: {
    command: commandReducer,
  },
});
