import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import server from "../../utils/server";

export const login = createAsyncThunk(
    "login/login",
    async (user, { rejectWithValue }) => {
        try {
            const response = await server.post("/login", user);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.error.message);
        }
    },
);

const sliceLogin = createSlice({
    name: "login",
    initialState: {
        user: null,
        status: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.status = "loading";
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = "success";
                state.user = action.payload;
            })
            .addCase(login.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default sliceLogin.reducer;