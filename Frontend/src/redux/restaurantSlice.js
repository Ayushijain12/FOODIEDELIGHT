import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async thunk for login
export const RegisterRestaurant = createAsyncThunk(
  'restaurant/RegisterRestaurant',
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8081/restaurants', values);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const GetRestaurants = createAsyncThunk(
  'restaurant/GetRestaurants',
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:8081/restaurants/lists', values);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define the slice
const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    addResData: [],
    getRestaurants : [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(RegisterRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RegisterRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.addResData = action.payload;
      })
      .addCase(RegisterRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(GetRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(GetRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.getRestaurants = action.payload;
      })
      .addCase(GetRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default restaurantSlice.reducer;
