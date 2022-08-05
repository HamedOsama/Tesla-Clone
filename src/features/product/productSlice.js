import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Solar Roof', 'Solar Panels']
}
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {}
})
export const selectProducts = state => state.product.products;
export const productReducer = productSlice.reducer;