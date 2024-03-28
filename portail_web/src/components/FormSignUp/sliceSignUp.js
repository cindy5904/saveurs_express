import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const signUp = createAsyncThunk(
    "signUp/signUp",
    async (user, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/server/v1/signup",
                user,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.error.message);
        }
    },
);

const sliceSignUp = createSlice({
    name: "signUp",
    initialState: {
        status: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUp.pending, (state) => {
                state.status = "loading";
            })
            .addCase(signUp.fulfilled, (state) => {
                state.status = "success";
            })
            .addCase(signUp.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default sliceSignUp.reducer;
