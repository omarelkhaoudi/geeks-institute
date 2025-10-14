import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async actions
export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
  return 1; // increment by 1
});

export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
  return -1; // decrement by 1
});

const ageSlice = createSlice({
  name: 'age',
  initialState: {
    age: 21,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // AGE UP
      .addCase(ageUpAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.age += action.payload;
      })
      .addCase(ageUpAsync.rejected, (state) => {
        state.loading = false;
      })
      // AGE DOWN
      .addCase(ageDownAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.age += action.payload;
      })
      .addCase(ageDownAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default ageSlice.reducer;
