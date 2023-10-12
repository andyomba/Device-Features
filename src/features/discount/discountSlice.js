import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  discountApplied: false,
  discountPercentage: 0,
};

export const discountSlice = createSlice({
  name: 'discount',
  initialState,
  reducers: {
    applyDiscount: (state, action) => {
      state.discountApplied = true;
      state.discountPercentage = action.payload;
    },
    resetDiscount: state => {
      state.discountApplied = false;
      state.discountPercentage = 0;
    },
  },
});

export const { applyDiscount, resetDiscount } = discountSlice.actions;

export default discountSlice.reducer;
