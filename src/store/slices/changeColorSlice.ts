import { createSlice } from "@reduxjs/toolkit";

const changeColorSlice = createSlice({
    name: 'changeColorSlice',
    initialState: {
        color: '#D95550',
    },
    reducers: {
        setBgColor(state, action) {
            state.color = action.payload 
        }
    }
})

export const { setBgColor }  = changeColorSlice.actions; 
export default changeColorSlice.reducer;