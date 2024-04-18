import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../slices/modalSlice";

const store = configureStore({
  reducer: {
    modal: modalSlice,
  },
});
export default store;
