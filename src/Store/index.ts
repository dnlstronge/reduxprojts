
import { createSlice, configureStore } from "@reduxjs/toolkit"
import counterSlice from "./counter-slice"

export type initS = {
    counter: number,
    showCounter: boolean
}
export type initA = {
    isAuthenticated: boolean
}


const initialAuthState: initA = {isAuthenticated: false}



const authSlice = createSlice({
    name: "authenication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})


/* Actions */
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions


// guess this is where the problem is => 
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
        },
})

export default store;