import { createSlice } from "@reduxjs/toolkit";


const initialUser = {
    user: {
        "firstName": "Firsname",
        "lastName": "Lastname",
        "handle": "@userHandler",
        "profilePicture": "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png",
        "bannerPicture": "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbm5lcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        "bio": "Love Running, Tennis, Biking, Walking, Swimming",
        "website": "https://mysportslife.com/",
        "location": "Seattle, WA",
        "dateOfBirth": "May 22 1996",
        "dateJoined": "03/2011",
        "followingCount": 771,
        "followersCount": 9876,
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers: {
        updateUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export default userSlice.reducer;
export const { updateUser } = userSlice.actions;