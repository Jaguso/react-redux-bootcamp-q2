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
        quantity: 1
      }
      state.cartProducts.push(productObj);
    },
    handleAddOneQuantity: (state, action) => {
      state.cartProducts = action.payload.products.map(cartProductObj => {
        if (action.payload.id === cartProductObj.id) {
          return {
            ...cartProductObj,
            quantity: cartProductObj.quantity + 1
          };
        } else {
          return cartProductObj;
        }
      });
    },
    handleRestOneQuantity: (state, action) => {
      state.cartProducts = action.payload.products.map(cartProductObj => {
        if (action.payload.id === cartProductObj.id && cartProductObj.quantity !== 1) {
          return {
            ...cartProductObj,
            quantity: cartProductObj.quantity - 1
          };
        } else {
          return cartProductObj;
        }
      });
    }
  }
});

export const { addProductToCart, handleAddOneQuantity, handleRestOneQuantity } = cartSlice.actions;

export const selectCartProducts = (state) => state.cart.cartProducts;

export default cartSlice.reducer;