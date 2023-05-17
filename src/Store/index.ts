
import { configureStore } from "@reduxjs/toolkit"
import counterSliceReducer from "./counter-slice"
import authSlice from "./auth-slice"

/* Types */

export type initS = {
    counter: number,
    showCounter: boolean
}
export type initA = {
    isAuthenticated: boolean
}



export const authActions = authSlice.actions

/* Store */

const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        auth: authSlice.reducer
        },
})

export default store;