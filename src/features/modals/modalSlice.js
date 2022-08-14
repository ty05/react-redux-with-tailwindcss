import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalOpen: false 
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
       check: (state) => {
           state.modalOpen = !state.modalOpen
       } 
    }
})

export const {check} = modalSlice.actions
export default modalSlice.reducer