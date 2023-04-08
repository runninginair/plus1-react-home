import axios from 'axios';                              // import axios

// (A-8) 7.5 Integrating Netlify React applications with remote Node servers
// const TUITS_API = 'https://tuiter-node-server-app-cs1234-sp23.onrender.com/api/tuits';

// const TUITS_API = 'http://localhost:4000/api/tuits';    // location of HTTP services
// const TUITS_API = "https://tuiter-node-server-app-eetw.onrender.com/api/tuits";
const TUITS_API = "https://tuiter-node-server-app-a9-pr54.onrender.com/api/tuits";


export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findTuits = async () => {              // async tags this function as asynchronous
    const response = await axios.get(TUITS_API);    // send HTTP GET request to TUITS_API
    const tuits = response.data;                    // extract JSON array from response from server
    return tuits;                                   // return tuits
}

export const deleteTuit = async (tid) => {
    const response = await axios                    // send HTTP DELETE request to server
        .delete(`${TUITS_API}/${tid}`)              // append tuit's ID to URL
    return response.data                            // data contains response's status we'll ignore
}                                                   // for now

export const updateTuit = async (tuit) => {         // service function accepts tuit to send server
    const response = await axios                    // send HTTP PUT request appending tuit's ID
        .put(`${TUITS_API}/${tuit._id}`, tuit);     // to URL, and embed tuit object in BODY
    return tuit;                                    // return tuit update to update in reducer's
}                                                   // state's store
