import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "YOUR_API_URL_HERE";

// Action asynchrone pour récupérer la liste des commandes
export const fetchCommands = createAsyncThunk(
  "commands/fetchCommands",
  async () => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error) {
      throw Error("Failed to fetch commands");
    }
  }
);

const commandSlice = createSlice({
  name: "commands",
  initialState: {
    commands: [],
    loading: false,
    error: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      // Gestion de l'état "pending" pour fetchCommands
      .addCase(fetchCommands.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      // Gestion de l'état "fulfilled" pour fetchCommands
      .addCase(fetchCommands.fulfilled, (state, action) => {
        state.loading = false;
        state.commands = action.payload;
      })
      // Gestion de l'état "rejected" pour fetchCommands
      .addCase(fetchCommands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commandSlice.reducer;
