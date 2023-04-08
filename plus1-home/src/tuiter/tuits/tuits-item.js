import React, { useState } from "react";
// import { deleteTuit } from "./tuits-reducer";
import { deleteTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";
import TuitStats from "./tuits-stats";


const TuitItem = (
    {
        tuit = {
            "username": "Novak Djokovic",
            "time": "50mins",
            "title": "I'm very grateful for the kind of energy and reception and love and support I got last night.",
            "image": "https://pbs.twimg.com/profile_images/1219965365226065920/EBF8Rd9v_400x400.jpg",
            "handle": "@novak_djokovic",
            "tuit": " TBD ",
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        // dispatch(deleteTuit(id));
        dispatch(deleteTuitThunk(id));
    };

// const TuitItem = () => {
//     const dispatch = useDispatch();
//     const deleteTuitHandler = (id) => {
//         dispatch(deleteTuitThunk(id));
//     }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-auto mt-1">
                    <img className="float-end rounded-circle"
                        width={50}
                        // src={`/images/${tuit.image}`}
                        src={tuit.image}
                        alt='Avatar image' />
                </div>

                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                            onClick={() => deleteTuitHandler(tuit._id)}></i>
                        <span className="fw-bold"> {tuit.username} </span>
                        <i className="bi bi-patch-check-fill text-primary"></i>
                        <span className="text-secondary"> {tuit.handle} • {tuit.time} </span>
                    </div>

                    <h6>{tuit.title}</h6>
                    <div className="text-secondary">
                        {tuit.tuit && <p >{tuit.tuit}</p>}
                    </div>

                    {/* <TuitStats /> */}
                    <TuitStats key={tuit._id} tuit={tuit} />

                </div>
            </div>
        </li>
    );
};

export default TuitItem;

