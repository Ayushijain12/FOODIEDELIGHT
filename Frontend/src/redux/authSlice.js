// src/redux/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async thunk for login
export const loginToEmp = createAsyncThunk(
  'auth/loginToEmp',
  async (values, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:8081/login', values);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define the slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    emailSubjects: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginToEmp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginToEmp.fulfilled, (state, action) => {
        state.loading = false;
        state.emailSubjects = action.payload;
      })
      .addCase(loginToEmp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
