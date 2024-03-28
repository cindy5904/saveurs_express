// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const createRestaurant = createAsyncThunk(
//     'restaurant/createRestaurant',
//     async (restaurant, { rejectWithValue }) => {
//         try {
//         const response = await axios.post(
//             'http://localhost:3000/server/v1/restaurant',
//             restaurant,
//         );
//         return response.data;
//         } catch (error) {
//         return rejectWithValue(error.response.data.error.message);
//         }
//     },
//     );