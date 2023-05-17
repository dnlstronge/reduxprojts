
import { createSlice, configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter-slice"
import authSlice from "./auth-slice"

export type initS = {
    counter: number,
    showCounter: boolean
}
export type initA = {
    isAuthenticated: boolean
}


/* Actions */
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
        },
})

export default store;