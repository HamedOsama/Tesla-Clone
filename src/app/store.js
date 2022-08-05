import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from '../features/product/productSlice'
import { optionReducer } from '../features/option/optionSlice';
export const store = configureStore({
  reducer: {
    product: productReducer,
    option: optionReducer
  },
});
