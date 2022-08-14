import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../src/features/Cart/cartSlice'
import modalReducer from '../src/features/modals/modalSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer, 
    },
})