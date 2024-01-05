import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
  cart: [],
  count: 0,
};

const cartSlice = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {

      const existingItem = state.cart.find((item:any) => item.id === payload.id);


      if (!existingItem) {
        state.cart = [...state.cart, { ...payload, quantity: 1 }];
        state.count = state.count + 1;
      }
    },
    updateCount: (state, { payload }) => {
      state.cart.map((products:any) => {
        if (products.id === payload.id) {
          products.quantity += 1
          // state.count = state.count + 1;

        }
      }

      )
    },
    DecreaseCount: (state, { payload }) => {
      state.cart.map((products:any) => {
        if (products.id === payload.id) {
          products.quantity -= 1
          // state.count = state.count - 1;

        }
      })
    },

    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter((items:any) => {

        return (items.id !== payload.id)
      })
      state.count -= 1
    }

  },
});


export const cartItems = (state: any) => state.cartItem.cart;
export const count = (state: any) => state.cartItem.count;
export const { addToCart, updateCount, DecreaseCount, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer; 