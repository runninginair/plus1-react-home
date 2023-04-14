import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findActivityThunk } from "../../services/activities-thunks";   // import the thunk
import ActiviteItem from "./activities-item";

const ActivitiesList = () => {
    const { activities, loading } = useSelector( 
        state => state.activityData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findActivityThunk())
    }, [])
    return (
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }{
                activities && activities.map(activity =>
                    <ActiviteItem
                        key={activity._id}
                        activity={activity}
                    />
                )
            }
        </ul>
    );
};

export default ActivitiesList;