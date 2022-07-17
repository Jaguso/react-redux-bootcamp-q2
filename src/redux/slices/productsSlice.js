import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL = 'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api';

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${URL}/products/`, {
        method: 'GET',
        headers: {
          'x-api-key': process.env.REACT_APP_API_KEY
        }
      });
      const data = await response.json();
      return data;
    } catch(error) {

    }
  }
);


export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: true
  }, extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.items;
      })
  }
});

export const selectAllProducts = (state) => state.products.products;
export const selectLoading = (state) => state.products.loading;

export default productsSlice.reducer;