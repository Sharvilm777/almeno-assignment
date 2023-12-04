import { configureStore } from '@reduxjs/toolkit'
import courseReducer from "./details"

export const store = configureStore({
    reducer: {
        courses: courseReducer,
    },
})