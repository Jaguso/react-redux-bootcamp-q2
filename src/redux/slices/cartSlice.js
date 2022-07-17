import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api/';

export const postOrder = createAsyncThunk(
  "cart/postOrder",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${URL}/orders/`, {
        method: 'POST',
        headers: {
          'x-api-key': process.env.REACT_APP_API_KEY
        }
      })
      const data = await response.json();
      return data; 
    } catch(error) {

    }
  }
)

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProducts: [],
    orderData: null
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.fulfilled, (state, action) => {
        state.orderData = action.payload
        state.cartProducts = []
      })
  }
});

export const { addProductToCart, addOneToQuantity, restOneToQuantity, deleteProductFromCart } = cartSlice.actions;

export const selectCartProducts = (state) => state.cart.cartProducts;
export const selectOrderData = (state) => state.cart.orderData;

export default cartSlice.reducer;