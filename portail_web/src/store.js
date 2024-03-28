import { configureStore } from "@reduxjs/toolkit";
import sliceSignUp from "./components/FormSignUp/sliceSignUp";
import sliceLogin from "./components/FormLogin/sliceLogin";
import sliceRestaurant from "./components/Restaurant/sliceRestaurant";

const store = configureStore({
    reducer: {
        signUp: sliceSignUp,
        login: sliceLogin,
        restaurant: sliceRestaurant,
    },
});

export default store;
