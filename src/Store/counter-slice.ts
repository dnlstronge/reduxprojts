import { createSlice } from "@reduxjs/toolkit"
import { initS } from "."


const intitialCounterState: initS = {counter: 0, showCounter: false }


const counterSlice = createSlice({
    name: "counter",
    initialState: intitialCounterState,
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

/* Actions */

export const counterActions = counterSlice.actions

export default counterSlice.reducer;