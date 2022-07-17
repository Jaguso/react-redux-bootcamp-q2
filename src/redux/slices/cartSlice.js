import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: []
  },
  reducers: {
    addProductToCart: (state, action) => {
      const productObj = {
        ...action.payload,
        quiantity: 1
      }
      state.cartProducts.push(productObj);
    }
  }
});

export const { addProductToCart } = cartSlice.actions;

export const selectCartProducts = (state) => state.cart.cartProducts;

export default cartSlice.reducer;