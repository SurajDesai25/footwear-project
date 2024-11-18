import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  allTotal: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let product = action.payload;
      let findProduct = state.cartProducts.find(
        (item) => item.id === product.id
      );

      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        state.cartProducts.push(action.payload);
      }
    },

    // removeToCart: (state, action) => {
    //   let productId = action.payload;
    //   return state.cartProducts.filter((item) => item.id != productId);
    // },
    removeToCart: (state, action) => {
      let productId = action.payload;
      state.cartProducts = state.cartProducts.filter((item) => item.id !== productId);
    },
    

    incrementByQuantity: (state, action) => {
      let productId = action.payload;
      let findProduct = state.cartProducts.find(
        (item) => item.id === productId
      );
      if (findProduct) {
        findProduct.quantity += 1;
      }
    },

    decrementByQuantity: (state, action) => {
      let productId = action.payload;
      let findProduct = state.cartProducts.find(
        (item) => item.id === productId
      );
      if (findProduct && findProduct.quantity > 1) {
        findProduct.quantity -= 1;
      }
    },

    AddAllTotal: (state, action) => {
      state.allTotal = action.payload;
    },
  },
});

export const {
  addToCart,
  removeToCart,
  incrementByQuantity,
  decrementByQuantity,
  AddAllTotal
} = cartSlice.actions;

export default cartSlice.reducer;
