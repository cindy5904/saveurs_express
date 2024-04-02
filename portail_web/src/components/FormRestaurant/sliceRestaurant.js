import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import server from "../../utils/server";

export const getRestaurantByUser = createAsyncThunk(
    "restaurant/getRestaurantByUser",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await server.get(`/restaurant/${userId}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.error.message);
        }
    },
);

export const createRestaurant = createAsyncThunk(
    "restaurant/createRestaurant",
    async (restaurant, { rejectWithValue }) => {
        try {
            const response = await server.post(
                "/create-restaurant",
                restaurant,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.error.message);
        }
    },
);

const sliceRestaurant = createSlice({
    name: "restaurant",
    initialState: {
        restaurant: [],
        status: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createRestaurant.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createRestaurant.fulfilled, (state) => {
                state.status = "success";
            })
            .addCase(createRestaurant.rejected, (state) => {
                state.status = "failed";
            });
        builder
            .addCase(getRestaurantByUser.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getRestaurantByUser.fulfilled, (state, action) => {
                state.restaurant = action.payload;
                state.status = "success";
            })
            .addCase(getRestaurantByUser.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default sliceRestaurant.reducer;
