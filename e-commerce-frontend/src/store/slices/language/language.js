import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
    name: "language",
    initialState:  localStorage.getItem("language") || "en",
    reducers: {
        setLanguage: (_, { payload }) => {
            localStorage.setItem("language", payload)
            return payload
        }
    }
})

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;