import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";
// eslint-disable-next-line no-unused-vars
import { fetchUser } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer, // Tambahkan reducer pengguna di sini
  },
});

export default store;
