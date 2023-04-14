import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostSummaryItem from "./post-summary-item";
import { findActivityThunk } from "../../services/activities-thunks";

const PostSummaryList = () => {

    const { tuits, loading } = useSelector(
        state => state.tuitsData)
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
                tuits && tuits.map(tuit =>
                    <PostSummaryItem
                        key={tuit._id}
                        tuit={tuit}
                    />
                )
            }
        </ul>
    );
};

export default PostSummaryList;