import { createSlice } from "@reduxjs/toolkit";

// Define initial state
const initialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cartProducts.push(action.payload);
    },
    removeItem(state, action) {
      state.cartProducts = state.cartProducts.filter(
        (product) => product._id !== action.payload.id
      );
    },
    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cartProducts.find(
        (product) => product._id === id
      );

      // Check if item exists in the cart
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    clearCart(state) {
      console.log("Called clear cart");
      state.cartProducts = [];
    },
  },
});

// Export actions
export const { addItem, removeItem, updateItemQuantity, clearCart } =
  cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
