import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addCounter: (state) => {
            state.counter++
        }
    }
})

export const { addCounter } = counterSlice.actions

export default counterSlice.reducer