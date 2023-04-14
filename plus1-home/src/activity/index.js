import React from 'react';
import ExploreComponent from "./explore";
import NavigationSidebar from './navigation-sidebar';
import HomeComponent from './home';

import whoReducer from "./reducers/who-reducer";
import activitiesReducer from "./activities/activities-reducer";
import userReducer from "./profile/profile-reducer";
import PostSummaryList_a7 from './post-summary-list/index';
import ProfileComponent from './profile';
import EditProfile from './edit-profile';

import { Routes, Route } from "react-router";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";


const store = configureStore(
    { reducer: { 
        who: whoReducer, 
        activityData: activitiesReducer,
        user: userReducer } }
);

function Explorer() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore" />
                </div>
                <div className="col-10 col-md-10 col-lg-10 col-xl-9"
                    style={{ "position": "relative" }}>

                    <Routes>

                        <Route path="home" element={<HomeComponent />} />

                        <Route path="explore" element={<ExploreComponent />} />

                        <Route path="lists" element={<PostSummaryList_a7 />} />

                        <Route path="profile" element={<ProfileComponent />} />

                        <Route path="profile/edit-profile" element={<EditProfile />} />

                    </Routes>

                </div>

            </div>
        </Provider>
    );
}

export default Explorer;