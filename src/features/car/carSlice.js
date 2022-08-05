import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  car: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Solar Roof', 'Solar Panels']
}
const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {}
})
export const selectCars = state => state.counter.car;
export const carReducer = carSlice.reducer;