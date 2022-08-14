import { createSlice } from '@reduxjs/toolkit'
import DataItems from '../../Data'

const initialState = {
  items: DataItems,
  amount: 4,
  total: 0,
  open: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    removeAll: (state) => {
        return {items:[], amount:0, total:0}
    },
    removeItem: (state,action) => {
        state.items = state.items.filter((item) => item.id!==action.payload)
    },
    increment: (state, action) => {
        const item = state.items.find((target) => target.id === action.payload)
        item.amount += 1
    },
    decrement: (state, action) => {
        const item = state.items.find((target) => target.id === action.payload)
        item.amount -= 1
    },
    calculateByAmount: (state, action) => {
        let amount = 0 
        let total = 0
        state.items.forEach((item) => {
            amount+=item.amount
            total += item.amount * item.price
        })
        state.amount = amount
        state.total = total
    },
    openButton: (state) => {
        state.open = !state.open
    }
  },
})

// Action creators are generated for each case reducer function
export const { removeAll, removeItem, increment, decrement, calculateByAmount, openButton } = cartSlice.actions

export default cartSlice.reducer