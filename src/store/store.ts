import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import changeColorSlice from "./slices/changeColorSlice";
import setCurrentTab from "./slices/currentTab";
import setTime from "./slices/timeSlice";

const store = configureStore({
    reducer: {
        color: changeColorSlice,
        time: setTime,
        currentTab: setCurrentTab,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export default store;