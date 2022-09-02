import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import changeColorSlice from "./slices/changeColorSlice";

const store = configureStore({
    reducer: {
        color: changeColorSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch()
export default store;