import { createSlice } from "@reduxjs/toolkit";


const initialUser = {
    user: {
        "firstName": "Novak",
        "lastName": "Djokovic",
        "handle": "@DjokerNole",
        "profilePicture": "Novak_400x400.jpeg",
        "bannerPicture": "ND_banner.jpeg",
        "bio": "Serbian professional tennis player. Currently ranked world No.1 in men's singles by the Association of Tennis Professionals, and has held the top position for a record total 380 weeks, finishing as the year-end No.1 an Open Era record seven times.",
        "website": "https://novakdjokovic.com/",
        "location": "Seattle, WA",
        "dateOfBirth": "May 22 1986",
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