
import { createSlice, configureStore } from "@reduxjs/toolkit"

export type initS = {
    counter: number,
    showCounter: boolean
}

const intitialState: initS = {counter: 0, showCounter: false }

const counterSlice = createSlice({
    name: "counter",
    initialState: intitialState,
    reducers: {
        increment(state){
            state.counter ++
        },
        decrement(state){
            state.counter --
        },
        increase(state, action){
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        }
        }
})

export const counterActions = counterSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;