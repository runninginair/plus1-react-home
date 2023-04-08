/**
 * Under the tuiter directory, in a new folder called WhoToFollowList, 
 * create a JavaScript file called WhoToFollowListItem.js that implements
 * a function called WhoToFollowListItem that accepts a parameter called who.
 * The parameter represents a single user we might want to follow.
 * 
 * The function should return an HTML string that renders as shown here on the right.
 * The data in the who parameter contains properties that describe each user such as
 * avatarIcon, userName, and handle.
 */

const WhoToFollowListItem = (who) => {

    return (`
        <div class="list-group-item list-group-item-action">
            <div class="row wd-fg-white">
                <div class="col-2">
                    <a href=${who.href}>
                        <img src=${who.avatarIcon} class="wd-avater ms-2">
                    </a>
                </div>
                <div class="col-7">
                    <b>${who.userName}</b> <i class="bi bi-check-circle-fill"></i><br />
                    <span>@${who.handle}</span>
                </div>
                <div class="col-2 d-grid mt-2 me-2">
                    <button class="btn btn-primary btn-block rounded-pill">Follow</button>
                </div>
            </div>
        </div>
    `);

}

export default WhoToFollowListItem;
