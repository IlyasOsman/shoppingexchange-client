import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    isLoggedIn: false,
    token: null, 
    email: null,
    username: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload;
            state.email = action.payload.email;
            state.username = action.payload.username;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.token = null;
            state.email = null;
            state.username = null;
        },
    },
});

export const { loginSuccess, logout } = authSlice.actions

export default authSlice.reducer