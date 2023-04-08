import React, { useState } from "react";

// import { createTuit } from "../tuits/tuits-reducer";        // wont be using the reducer function anymore
import { createTuitThunk } from "../../services/tuits-thunks"; // we'll be using the createTuitThunk instead

import { useDispatch } from "react-redux";                  // import dispatch hook
import { useSelector } from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    // const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();                         // retrieve dispatch function with hook
    const tuitClickHandler = () => {
        console.log(whatsHappening);
        const newTuit = {                                   // create new tuit
            tuit: whatsHappening,                            // with text typed in textarea
            username: "Novak Djokovic",
            image: "https://pbs.twimg.com/profile_images/1219965365226065920/EBF8Rd9v_400x400.jpg",
            handle: "@novak_djokovic",
            time: "1min",
            title: "Tennis",
            topic: "ATP Tennis",
            liked: false,
            likes: 0,
            dislikes: 0,
            replies: 0,
            retuits: 0
        }

        // dispatch(createTuit(newTuit));                      // send tuit as action payload
        dispatch(createTuitThunk(newTuit));                 // use thunk instead of reducer function
    }

    return (
        <div className="row">
            <div className="col-auto">
                {/* <img className="rounded-circle" height={48} src={`/images/${user.profilePicture}`} /> */}
                <img className="rounded-circle" height={48}
                    src={'https://pbs.twimg.com/profile_images/1219965365226065920/EBF8Rd9v_400x400.jpg'} />
            </div>

            <div className="col-10">
                <textarea value={whatsHappening} placeholder="What's happening?"
                    className="form-control border-0"
                    onChange={(event) => setWhatsHappening(event.target.value)}>
                </textarea>
                <div>
                    <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}>
                        Tuit
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