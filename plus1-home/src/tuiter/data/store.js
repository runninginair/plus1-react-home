import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../profile/profile-reducer";
// import userReducer from "../../screens/profile-demo/user-reducer";
import userReducer from "../profile/profile-reducer";
import tuitsReducer from "../tuits/tuits-reducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        tuits: tuitsReducer,
    },
});

export default store;