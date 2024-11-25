import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem("cartData")
  return cartData ? JSON.parse(cartData) : {cartProducts: []}
}

const saveCartToLocalStorage = (cartProducts) =>{
  const cartData = {cartProducts}
  localStorage.setItem("cartData", JSON.stringify(cartData))
}
const initialState = loadCartFromLocalStorage()

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
      saveCartToLocalStorage(state.cartProducts)
    },

    removeToCart: (state, action) => {
      let productId = action.payload;
      state.cartProducts = state.cartProducts.filter((item) => item.id !== productId)
      saveCartToLocalStorage(state.cartProducts)

    },

    incrementByQuantity: (state, action) => {
      let productId = action.payload;
      let findProduct = state.cartProducts.find(
        (item) => item.id === productId
      );
      if (findProduct) {
        findProduct.quantity += 1;
      }
      saveCartToLocalStorage(state.cartProducts)

    },

    decrementByQuantity: (state, action) => {
      let productId = action.payload;
      let findProduct = state.cartProducts.find(
        (item) => item.id === productId
      );
      if (findProduct && findProduct.quantity > 1) {
        findProduct.quantity -= 1;
      }
      saveCartToLocalStorage(state.cartProducts)

    },

  
  },
});

export const {
  addToCart,
  removeToCart,
  incrementByQuantity,
  decrementByQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
