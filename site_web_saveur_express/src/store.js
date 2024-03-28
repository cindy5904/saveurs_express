import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./components/Global/globalSlice";

const store = configureStore({
    reducer : {
        global : globalSlice
    }
})

export default store;