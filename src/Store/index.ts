
import { configureStore } from "@reduxjs/toolkit"
import counterSliceReducer from "./counter-slice"
import authSliceReducer from "./auth-slice"

/* Types */

export type initS = {
    counter: number,
    showCounter: boolean
}
export type initA = {
    isAuthenticated: boolean
}





/* Store */

const store = configureStore({
    reducer: {
        counter: counterSliceReducer,
        auth: authSliceReducer
        },
})

export default store;