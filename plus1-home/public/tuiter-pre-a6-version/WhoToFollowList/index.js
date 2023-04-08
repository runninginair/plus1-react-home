import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollow= () => {
    let title = 'Who to follow';
    return (`
    <div class="list-group">
        <span class="list-group-item list-group-item-action wd-fg-white">
            <b> ${title} <b>
        </span>
        
        ${
            who.map(who => {
                return(WhoToFollowListItem(who));
            }).join('')
        }
        </div>
    `);
}

export default WhoToFollow;
