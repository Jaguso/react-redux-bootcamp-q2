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
    addOneToQuantity: (state, action) => {
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
    restOneToQuantity: (state, action) => {
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
    },
    deleteProductFromCart: (state, action) => {
      state.cartProducts = action.payload.products.filter(item => item.id !== action.payload.id);
    }
  }
});

export const { addProductToCart, addOneToQuantity, restOneToQuantity, deleteProductFromCart } = cartSlice.actions;

export const selectCartProducts = (state) => state.cart.cartProducts;

export default cartSlice.reducer;