import React from "react";


const PostSummaryItem = (
    {
        tuit = {
            "topic": "Tesla on Mars",
            "username": "Tesla",
            "time": "0.5h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "Tesla_logo_500x500.jpeg"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>
                        <span className="fw-bolder text-primary">{tuit.username}</span>
                        <span className="text-secondary"> • {tuit.time}</span>
                    </div>
                    <div className="fw-bolder text-dark">{tuit.topic}</div>
                    <div className="text-secondary">{tuit.tuit}</div>
                </div>
                <div className="col-2">
                    {/* <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`} alt='Post Image' /> */}
                    <img width={70} className="float-end rounded-3" src={tuit.image} alt='Post Image' />
                </div>
            </div>
        </li>
    );
};

export default PostSummaryItem;