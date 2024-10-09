import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productNumber: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const addProductExists = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (addProductExists) {
        addProductExists.quantity += parseInt(action.payload.quantity);
      } else {
        state.products.push({
          ...action.payload,
          quantity: parseInt(action.payload.quantity),
        });
      }
      state.productNumber =
        state.productNumber + parseInt(action.payload.quantity);
    },
    removeFromCart: (state, action) => {
      const productToRemove = state.products.find(
        (product) => product.id === action.payload
      );

      state.productNumber -= productToRemove.quantity;

      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );

      state.products.splice(index, 1);
    },
    incrementInCart: (state, action) => {
      const itemInc = state.products.find(
        (product) => product.id === action.payload
      );
      if (itemInc.quantity >= 1) {
        itemInc.quantity = itemInc.quantity + 1;
      }
      state.productNumber += 1;
    },
    decrementInCart: (state, action) => {
      const itemDec = state.products.find(
        (product) => product.id === action.payload
      );
      if (itemDec.quantity === 1) {
        const index = state.products.findIndex(
          (product) => product.id === action.payload
        );
        state.products.splice(index, 1);
      } else {
        itemDec.quantity--;
      }
      state.productNumber -= 1;
    },
  },
});

export const { addToCart, removeFromCart, incrementInCart, decrementInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
