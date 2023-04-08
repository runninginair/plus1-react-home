import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 123,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        updateCount: (state, action) => {
            state.count = action.payload;
        },
    },
});

export default counterSlice.reducer;
export const { updateCount } = counterSlice.actions;