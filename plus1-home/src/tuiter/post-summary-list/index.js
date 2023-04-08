import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";   // import the thunk
import PostSummaryItem from "./post-summary-item";


const PostSummaryList = () => {

    const { tuits, loading } = useSelector(         // grab tuits and loading flag from reducer
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {                               // on component load
        dispatch(findTuitsThunk())                  // invoke find tuits thunk to fetch tuits and
    }, [])                                          // put them in the reducer's store so we can
    return (                                        // extract them with useSelector() and render the tuits here
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