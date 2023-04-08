import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {
        firstName: "Jin",
        lastName:"Johnson",
        email: "jin@gmail.com",
        phone:"123-123-1234",
        address: "123 main st"
    },
};

const userSlice = createSlice({
    name: "user",
    // initialState: initialState,     // JS easy syntext as follows,
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

// const reducers = {};
export default userSlice.reducer;
export const { updateUser } = userSlice.actions; 