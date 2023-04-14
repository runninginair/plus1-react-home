import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../profile/profile-reducer";
// import userReducer from "../../screens/profile-demo/user-reducer";
import userReducer from "../profile/profile-reducer";
import activityReducer from "../activities/activities-reducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        admin: adminReducer,
        activity: activityReducer,
    },
});

export default store;