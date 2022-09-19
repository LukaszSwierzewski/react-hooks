import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import pizzaReducer from './pizzaSlice'

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        counter: counterSlice
    }
})