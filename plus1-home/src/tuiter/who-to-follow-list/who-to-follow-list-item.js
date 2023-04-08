import React from "react";


const WhoToFollowListItem_a7 = (
    {
        who = {
            userName: 'NASA',
            handle: 'NASA',
            avatarIcon: 'nasa.png'
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`/images/${who.avatarIcon}`} alt='Avatar Image' />
                </div>
                <div className="col-8">
                    <div className="fw-bold">{who.userName}</div>
                    <div className="text-secondary">{who.handle}</div>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};

export default WhoToFollowListItem_a7;