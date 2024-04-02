import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import server from "../../utils/server";

export const createMenu = createAsyncThunk(
    "menu/createMenu",
    async (menu, { rejectWithValue }) => {
        try {
            const response = await server.post("/create-menu", menu);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.error.message);
        }
    },
);

export const getMenusByRestaurant = createAsyncThunk(
    "menu/getMenusByRestaurant",
    async (restaurantId, { rejectWithValue }) => {
        try {
            const response = await server.get(
                `/menus/restaurant/${restaurantId}`,
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.error.message);
        }
    },
);

export const getMenuById = createAsyncThunk(
    "menu/getMenuById",
    async (menuId, { rejectWithValue }) => {
        try {
            const response = await server.get(`/menu/${menuId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.error.message);
        }
    },
);

const sliceMenu = createSlice({
    name: "menu",
    initialState: {
        menus: [],
        status: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createMenu.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createMenu.fulfilled, (state) => {
                state.status = "success";
            })
            .addCase(createMenu.rejected, (state) => {
                state.status = "failed";
            });
        builder
            .addCase(getMenusByRestaurant.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getMenusByRestaurant.fulfilled, (state, action) => {
                state.menus = action.payload;
                state.status = "success";
            })
            .addCase(getMenusByRestaurant.rejected, (state) => {
                state.status = "failed";
            });
        builder
            .addCase(getMenuById.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getMenuById.fulfilled, (state, action) => {
                state.menus = action.payload;
                state.status = "success";
            })
            .addCase(getMenuById.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export default sliceMenu.reducer;
