import { createSlice } from "@reduxjs/toolkit";


interface CartState {
    cart: any[];
}
const initialState: CartState = {
    cart: [],
}

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            if (!state.cart.find((item) => item.id === action.payload.id)) {
                state.cart.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },
        clearCart: (state) => {
            state.cart = []
        }
    }
})

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions
export default CartSlice.reducer