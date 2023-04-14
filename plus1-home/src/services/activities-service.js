import axios from 'axios';                              // import axios

// (A-8) 7.5 Integrating Netlify React applications with remote Node servers
// const TUITS_API = 'https://tuiter-node-server-app-cs1234-sp23.onrender.com/api/tuits';

// const TUITS_API = 'http://localhost:4000/api/tuits';    // location of HTTP services
// const TUITS_API = "https://tuiter-node-server-app-eetw.onrender.com/api/tuits";
// const TUITS_API = "https://tuiter-node-server-app-a9-pr54.onrender.com/api/tuits";
// const TUITS_API = 'http://localhost:8080/api/plusone';    // location of HTTP services

// const TUITS_API = 'localhost:8080/activities/{uid}/date/{date}'
const ACTIVITY_API = 'localhost:8080/activities';

export const createActivity = async (activity) => {
    const response = await axios.post(ACTIVITY_API, activity);
    return response.data;
}

export const findActivities = async () => {
    const response = await axios.get(ACTIVITY_API);
    const activities = response.data;
    return activities;
}

export const deleteActivity = async (id) => {
    const response = await axios
        .delete(`${ACTIVITY_API}/${id}`);
    return response.data; 
}

export const updateActivity = async (activity) => {
    const response = await axios
        .put(`${ACTIVITY_API}/${activity._id}`, activity);
    return activity;
}
