import React, { useState } from "react";

// import { createTuit } from "../tuits/tuits-reducer";        // wont be using the reducer function anymore
import { createTuitThunk } from "../../services/tuits-thunks"; // we'll be using the createTuitThunk instead

import { useDispatch } from "react-redux";                  // import dispatch hook
import { useSelector } from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    // const { user } = useSelector((state) => state.user);
    let [howManyCalories, setHowManyCalories] = useState('');
    let [howManyMiles, setHowManyMiles] = useState('');

    const image_src = "https://w7.pngwing.com/pngs/129/292/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png";
    const dispatch = useDispatch();                         // retrieve dispatch function with hook
    const tuitClickHandler = () => {
        console.log(whatsHappening);
        const newTuit = {                                   // create new tuit
            tuit: whatsHappening,                            // with text typed in textarea
            username: "Firstname Lastname",
            image: image_src,
            handle: "@myhandler",
            time: "1min",
            title: "Running",
            topic: "Workout",
            liked: false,
            likes: 0,
            dislikes: 0,
            replies: 0,
            retuits: 0, 
            calories: howManyCalories,
            distance: howManyMiles,
        }

        // dispatch(createTuit(newTuit));                      // send tuit as action payload
        dispatch(createTuitThunk(newTuit));                 // use thunk instead of reducer function
    }

    return (
        <div className="row">
            <div className="col-auto">
                <img className="rounded-circle" height={78}
                    src={image_src} />
            </div>

            <div className="col-10">
                <textarea value={whatsHappening} placeholder="What's activity would you add? (Walking / Running / Cycling / Swimming / Other)"
                    className="form-control border-0"
                    onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>

                <textarea value={howManyCalories} placeholder="How many calories did you spend?"
                    className="form-control border-0"
                    onChange={(event) => setHowManyCalories(event.target.value)}>
                </textarea>

                <textarea value={howManyMiles} placeholder="How many miles did you conquer?"
                    className="form-control border-0"
                    onChange={(event) => setHowManyMiles(event.target.value)}>
                </textarea>

                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}>
                        Add New Activitiy
                    </button>
                    <div className="text-primary fs-2">
                        <i className="bi bi-card-image me-3"></i>
                        <i className="bi bi-filetype-gif me-3"></i>
                        <i className="bi bi-bar-chart me-3"></i>
                        <i className="bi bi-emoji-smile me-3"></i>
                        <i className="bi bi-geo-alt"></i>
                    </div>
                </div>
            </div>
            <div className="col-12"><hr /></div>
        </div>
    );
}

export default WhatsHappening;