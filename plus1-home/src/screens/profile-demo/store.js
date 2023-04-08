import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../counter-reducer";
import userReducer from "./user-reducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        counter: counterReducer,
    },
});

export default store;