/**
 * In previous assignments (A7), reducers were used to keep track of the tuits,
 * initialized from JSON files imported from within the reducers, but now we
 * want to use data from the server instead.
 * 
 * Previous implementations used reducer functions to update the state of the
 * tuits array by adding new tuits to the state, deleting tuits, and modifying
 * tuits in a redux store. Now we need to replace this implementation with the
 * HTTP services we implemented in the Node.js server in the previous section.
 * 
 * The reducers we've already implemented that create, delete, and update tuits,
 * are all synchronous, manipulating data local to the React.js application, but
 * we need to instead interact asynchronously with an HTTP server, while still
 * maintaining a state with Redux. The Redux createAsyncThunk function can wrap
 * an asynchronous HTTP function so that it can interact with a Redux reducer to
 * store data from a remote server into a local redux store.
 * 
 * In tuits-thunks.js, create the findTuitsThunk function that wraps the findTuits
 * HTTP service function as shown below. We'll implement thunks for each service
 * function in later sections.
 */

import { createAsyncThunk } from "@reduxjs/toolkit"     // import createAsyncTrunk
import * as service from "./tuits-service"              // import all exported functions as service


export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        const newTuit = await service.createTuit(tuit)
        return newTuit
    }
)

export const findTuitsThunk = createAsyncThunk(     // create thunk for findTuits
    'tuits/findTuits',                              // give unique name, thunk invokes
    async () =>                                     // service function. Returned data goes in
        await service.findTuits()                   // redux action's payload
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',                             // unique thunk identifier
    async (tuitId) => {                             // wraps
        await service.deleteTuit(tuitId)            // service method
        return tuitId                               // return tuit ID so we can remove tuit
    }                                               // from reducer's store
)

export const updateTuitThunk = createAsyncThunk(    // create update tuit thunk
    'tuits/updateTuit',                             // unique identifier
    async (tuit) =>                                 // accepts updated tuit
        await service.updateTuit(tuit)              // sends updated tuit to server with service
)
