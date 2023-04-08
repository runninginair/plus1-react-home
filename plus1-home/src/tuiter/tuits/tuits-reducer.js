import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
import { createTuitThunk, updateTuitThunk, findTuitsThunk, deleteTuitThunk }       // import the thunks
    from "../../services/tuits-thunks";


const initialState = {          // initial state has no tuits 
    tuits: [],                  // no tuits
    loading: false              // loading flag to display spinner
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,               // same as "initialState": initialState
    extraReducers: {            // define asynchronous reducers

        [findTuitsThunk.pending]:                       // if request is not yet fulfilled …
            (state) => {
                state.loading = true                    // set loading true so UI can display spinner
                state.tuits = []                        // empty tuits since we are still fetching them
            },

        [findTuitsThunk.fulfilled]:                     // when we get response, request is fulfilled
            (state, { payload }) => {                   // we extract/destruct payload from action object
                state.loading = false                   // turn off loading flag since we have the data
                state.tuits = payload                   // payload has tuits from server and update redux state
            },

        [findTuitsThunk.rejected]:                      // if request times out, or responds with error
            (state, action) => {
                state.loading = false                   // reset loading flag
                state.error = action.error              // report error
            },


        [deleteTuitThunk.fulfilled]:                    // handle successful response
            (state, { payload }) => {                   // server response successful
                state.loading = false                   // payload from action contains tuit ID to remove
                state.tuits = state.tuits               // turn off loading flag
                    .filter(t => t._id !== payload)     // filter out tuit whose ID matches tuit to remove
            },                                          // we're ignoring pending and rejected thunks


        [createTuitThunk.fulfilled]:                    // when server responds
            (state, { payload }) => {                   // payload contains new tuit
                state.loading = false                   // clear loading flag
                state.tuits.push(payload)               // append new tuit to tuits array
            },                                          // we're ignoring pending and rejected thunks

        [updateTuitThunk.fulfilled]:                    // when server update is done
            (state, { payload }) => {                   // payload contains updated tuit
                state.loading = false                   // clear loading flag
                const tuitNdx = state.tuits             // find index of updated tuit in array
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {                // merge old tuit with updated tuit
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }

    },
    reducers: {}
});

/**     Following code blocks are A7 version "tuitsSlice".   */
// const currentUser = {                        // create an object that represents the currently
//     "userName": "Novak Djokovic",            // logged in user which contains profile information
//     "handle": "@DjokerNole",                 // such as username, their avatar logo, and handle.
//     "image": "Novak_400x400.jpeg",           // Later this will come from users login in.
// };

// const templateTuit = {                       // create a template tuit object with some default
//     ...currentUser,                          // values and copy over the fields userName, handle and
//     "topic": "Programing",                   // image from the currentUser
//     "time": "1min",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,
// }

// const tuitsSlice = createSlice(
//     {
//         name: 'tuits',
//         initialState: tuits,

//         reducers: {                                 // add createTuit reducer function which appends
//             createTuit(state, action) {             // the new tuit in the payload at the beginning of the
//                 state.unshift({                     // array of tuits contained in the state. Also copy
//                     ...action.payload,              // all fields from templateTuit and initialize
//                     ...templateTuit,                // the unique identifier with a timestamp
//                     _id: (new Date()).getTime(),
//                 })
//             },

//             deleteTuit(state, action) {
//                 const index = state.findIndex(tuit =>
//                     tuit._id === action.payload);
//                 state.splice(index, 1);
//             },

//             likedToggle(state, action) {
//                 const tuit = state.find((tuit) =>
//                     tuit._id === action.payload._id);
//                 tuit.liked = !tuit.liked;
//             }

//         }
//     }
// );

export default tuitsSlice.reducer;
// export const { createTuit, deleteTuit, likedToggle } = tuitsSlice.actions;     // export reducer function