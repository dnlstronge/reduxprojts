
import { createSlice, configureStore } from "@reduxjs/toolkit"

export type initS = {
    counter: number,
    showCounter: boolean
}
export type initA = {
    isAuthenticated: boolean
}

/*Initial states */
const intitialCounterState: initS = {counter: 0, showCounter: false }
const initialAuthState: initA = {isAuthenticated: false}

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

const authSlice = createSlice({
    name: "authenication",
    initialState: initialAuthState,
    reducers: {
        setIsAuthenticated(state) {
            console.log("is this even firing")
            state.isAuthenticated = !state.isAuthenticated
        }
    }
})


/* Actions */
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

const store = configureStore({
    reducer: counterSlice.reducer
})

export default store;