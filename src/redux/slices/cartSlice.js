import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api';

export const postOrder = createAsyncThunk(
  "cart/postOrder",
  async (_, {rejectWithValue}) => {
    try {
      const response = await fetch(`${URL}/orders/`, {
        method: 'POST',
        headers: {
          // 'x-api-key': process.env.REACT_APP_API_KEY
          'x-api-key': 'lRjxbZfT7i8j77wfef4x75xKvODmnx415yRsYEV5'
        }
      })
      const data = await response.json();
      return data; 
    } catch(error) {
      return rejectWithValue('Ocurrió un error, intenta más tarde.');
    }
  }
)

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    orderData: null,
    orderError: null
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
    },
    cleanOrderData: (state, action) => {
      state.orderData = null;
      state.orderError = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.fulfilled, (state, action) => {
        state.orderData = action.payload
        state.cartProducts = []
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.orderError = action.payload
      })
  }
});

export const { addProductToCart, addOneToQuantity, restOneToQuantity, deleteProductFromCart, cleanOrderData } = cartSlice.actions;

export const selectCartProducts = (state) => state.cart.cartProducts;
export const selectOrderData = (state) => state.cart.orderData;
export const selectOrderError = (state) => state.cart.orderError;

export default cartSlice.reducer;