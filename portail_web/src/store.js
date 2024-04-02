import { configureStore } from "@reduxjs/toolkit";
import sliceSignUp from "./components/FormSignUp/sliceSignUp";
import sliceLogin from "./components/FormLogin/sliceLogin";
import sliceRestaurant from "./components/FormRestaurant/sliceRestaurant";
import sliceMenu from "./components/FormMenu/sliceMenu";

const store = configureStore({
    reducer: {
        signUp: sliceSignUp,
        login: sliceLogin,
        restaurant: sliceRestaurant,
        menu: sliceMenu,
    },
});

export default store;
