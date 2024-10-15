import { configureStore } from "@reduxjs/toolkit";
import testReducer from './testSlice'
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        users: testReducer,
        user: userReducer
    }
})