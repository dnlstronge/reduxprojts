import { initA } from ".";
import { createSlice } from "@reduxjs/toolkit";

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

export default authSlice;