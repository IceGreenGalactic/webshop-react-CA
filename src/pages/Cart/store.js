import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import counterSlice from './counterSlice';

export const store = configureStore({
    reducer: {
      cart: cartSlice,
      counter: counterSlice,
    },
  });