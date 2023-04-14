import { createSlice } from "@reduxjs/toolkit";
// import tuits from '../data/tuits.json';
import { createActivityThunk, updateActivityThunk, findActivityThunk, deleteActivityThunk }       // import the thunks
    from "../../services/activities-thunks";


const initialState = {          // initial state has no tuits 
    activities: [],                  // no tuits
    loading: false              // loading flag to display spinner
}

const tuitsSlice = createSlice({
    name: 'activities',
    initialState,               // same as "initialState": initialState
    extraReducers: {            // define asynchronous reducers

        [findActivityThunk.pending]:                       // if request is not yet fulfilled …
            (state) => {
                state.loading = true                    // set loading true so UI can display spinner
                state.activities = []                        // empty tuits since we are still fetching them
            },

        [findActivityThunk.fulfilled]:                     // when we get response, request is fulfilled
            (state, { payload }) => {                   // we extract/destruct payload from action object
                state.loading = false                   // turn off loading flag since we have the data
                state.activities = payload                   // payload has tuits from server and update redux state
            },

        [findActivityThunk.rejected]:                      // if request times out, or responds with error
            (state, action) => {
                state.loading = false                   // reset loading flag
                state.error = action.error              // report error
            },


        [deleteActivityThunk.fulfilled]:                    // handle successful response
            (state, { payload }) => {                   // server response successful
                state.loading = false                   // payload from action contains tuit ID to remove
                state.activities = state.activities               // turn off loading flag
                    .filter(t => t._id !== payload)     // filter out tuit whose ID matches tuit to remove
            },                                          // we're ignoring pending and rejected thunks


        [createActivityThunk.fulfilled]:                    // when server responds
            (state, { payload }) => {                   // payload contains new tuit
                state.loading = false                   // clear loading flag
                state.activities.push(payload)               // append new tuit to tuits array
            },                                          // we're ignoring pending and rejected thunks

        [updateActivityThunk.fulfilled]:                    // when server update is done
            (state, { payload }) => {                   // payload contains updated tuit
                state.loading = false                   // clear loading flag
                const activityNdx = state.activities             // find index of updated tuit in array
                    .findIndex((t) => t._id === payload._id)
                state.activities[activityNdx] = {                // merge old tuit with updated tuit
                    ...state.activities[activityNdx],
                    ...payload
                }
            }

    },
    reducers: {}
});

export default tuitsSlice.reducer;