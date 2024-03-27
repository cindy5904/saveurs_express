import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = async (urlName) => {
    let url = `http://${import.meta.env.VITE_DB_HOST}:${import.meta.env.VITE_DB_PORT}/${urlName}`
    const rep = await axios.get(url)
    const data = await rep.data
    return data
}

// export const fetchAllMenu = createAsyncThunk(
//     'global/fetchAllMenu',
//     async () => {
//         const data = await fetchApi(VITE_DB_DATABASE);
//         console.log(data);
//     }
// )

export const fetchAllRestaurateur = createAsyncThunk(
    'global/fetchAllRestaurateur',
    async () => {
        const data = await fetchApi(import.meta.env.VITE_DB_DATABASE);
        const restaurant = []
        for (let i = 0; i < data.length; i++) {
            const element = {
                idRestaurant: data[i].idRestaurant,
                nom: data[i].nom,
                specialite: data[i].specialite,
                img: data[i].img,
                notation: data[i].notation
            }
            restaurant.push(element)
        }
        return restaurant
    }
)

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        menu: [],
        restaurants: [],
        filtre: {
            restaurant: '',
            search: ''
        },
        darkMode: false,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllRestaurateur.fulfilled, (state, action) => {
            state.restaurants = action.payload;
        })
    }
})

export default globalSlice.reducer; 