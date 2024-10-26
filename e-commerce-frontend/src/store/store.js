import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./slices/language/language";

export const store = configureStore({
    reducer:{
        language: languageSlice
    }
})