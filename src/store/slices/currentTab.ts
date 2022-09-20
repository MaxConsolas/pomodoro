import { createSlice } from "@reduxjs/toolkit";

const currentTabSlice = createSlice({
    name: 'changeColorSlice',
    initialState: {
        currentTab: 'workTime',
    },
    reducers: {
        setCurrentTab(state, action) {
            state.currentTab = action.payload;
        }
    }
})

export const { setCurrentTab }  = currentTabSlice.actions; 
export default currentTabSlice.reducer;