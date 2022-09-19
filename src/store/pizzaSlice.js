import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toppings: ['peperroni'],
    gluten: true,
    products: []
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        toggleGluten: (state) => {
            state.gluten = !state.gluten
        },
        addToppings: (state, action) => {
            state.toppings = [...state.toppings, action.payload]
        },
        addProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { toggleGluten, addToppings, addProducts } = pizzaSlice.actions

export default pizzaSlice.reducer