import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
    name: 'changeColorSlice',
    initialState: {
        sessionTime: 25,
        smallBreakTime: 5,
        longBreakTime: 15,
    },
    reducers: {
        setSessionTime(state, action) {
            state.sessionTime = action.payload;
        },
        setSmallBreakTime(state, action) {
            state.smallBreakTime = action.payload; 
        },
        setLongBreakTime(state, action) {
            state.longBreakTime = action.payload;
        }
            
    }
})

export const { setSessionTime, setSmallBreakTime, setLongBreakTime }  = timeSlice.actions; 
export default timeSlice.reducer;