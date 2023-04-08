import React from "react";

// import { likedToggle } from "./tuits-reducer";
import { useDispatch } from "react-redux";

import { updateTuitThunk } from "../../services/tuits-thunks";


const TuitStats = (
    {
        tuit = {
            "replies": 0,
            "retuits": 0,
            "liked": false,
            "likes": 10,
            "dislikes": 10
        }
    }
) => {

    const dispatch = useDispatch();

    // const likedHandler = (stats) => {
    //     dispatch(likedToggle(stats));
    // };

    // const getlikesNumber = (liked, likes) => {
    //     return liked ? likes + 1 : likes;
    // };


    return (
        <div className="row pt-2">
            <div className="col">
                <i className="bi bi-chat"></i>
                <span> {tuit.replies} </span>
            </div>
            <div className="col">
                <i className="bi bi-arrow-repeat"></i>
                <span> {tuit.retuits} </span>
            </div>
            <div className="col">
                {/* <i className={stats.liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"}
                    onClick={() => likedHandler(stats)}></i>
                <span> {getlikesNumber(stats.liked, stats.likes)} </span> */}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))} className="bi bi-heart-fill me-2 text-danger"></i>
                {/* Likes */}
                {tuit.likes}
            </div>

            <div className="col">
                {/* <i className={stats.liked ? "bi bi-heart-fill text-danger" : "bi bi-heart"}
                    onClick={() => likedHandler(stats)}></i>
                <span> {getlikesNumber(stats.liked, stats.likes)} </span> */}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1
                }))} className="bi bi-hand-thumbs-down me-2 text-danger"></i>
                {/* Dislikes:  */}
                {tuit.dislikes}
                {/* <i class="bi bi-hand-thumbs-down-fill"></i> */}
            </div>

            <div className="col">
                <i className="bi bi-share"></i>
            </div>
        </div>
    );
};

export default TuitStats;