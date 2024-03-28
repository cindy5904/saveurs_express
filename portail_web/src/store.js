import { configureStore } from "@reduxjs/toolkit";
import sliceSignUp from "./components/FormSignUp/sliceSignUp";
import sliceLogin from "./components/FormLogin/sliceLogin";

const store = configureStore({
    reducer: {
        signUp: sliceSignUp,
        login: sliceLogin,
    },
});

export default store;
