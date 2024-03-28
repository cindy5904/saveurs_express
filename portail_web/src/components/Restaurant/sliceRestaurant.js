import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import server from "../../utils/server";

export const getRestaurantByUser = createAsyncThunk(
    "restaurant/getRestaurantByUser",
    async (userId, { rejectWithValue }) => {
        try {
            console.log(typeof userId);
            console.log(userId);
            const response = await server.get(`/restaurant/${userId}`);
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
        restaurant: null,
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
                console.log(action.payload);
                console.log(state.restaurant);
                state.status = "success";
            })
            .addCase(getRestaurantByUser.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default sliceRestaurant.reducer;
