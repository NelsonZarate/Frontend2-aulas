import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "@/types/posts";

interface CartState {
  items: Post[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Post>) => {
      const exists = state.items.find((p) => p.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((p) => p.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
