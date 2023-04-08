import React from "react";
import WhoToFollowListItem_a7 from "./who-to-follow-list-item";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
    const whoArray = useSelector(       // retrieve state from the store
        (state) => state.who
    );

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h2>Who to follow</h2>
            </li>
            {
                whoArray.map(who =>
                    <WhoToFollowListItem_a7
                        key={who._id}
                        who={who}
                    />
                )
            }
        </ul>
    );
};

export default WhoToFollowList;