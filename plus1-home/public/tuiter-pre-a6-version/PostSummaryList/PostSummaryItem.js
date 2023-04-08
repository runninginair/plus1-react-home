/**
 * PostSummaryItem.js that implements a function of the same name. 
 * The function should render as shown here on the right. 
 * The function should accept an argument called post that represents
 * a summary of a suggested post. 
 * 
 * The function should return an HTML string that renders as shown above. 
 * The data in the post contains properties that describe each of the posts
 * such as topic, userName, time, title, and image. An example post object is shown below.
 */

const PostSummaryItem = (post) => {

    let postTopic = (post.topic == ''? ``: `<span class="wd-fg-color-gray">${post.topic}</span><br />`)

    return (`
        <a href="#" class="list-group-item list-group-item-action">
            <div class="row pb-2 ps-2 pt-1">
                <div class="col-10">
                    ${postTopic}
                    <span class="wd-fg-white">
                        <b> ${post.userName} </b><i class="bi bi-check-circle-fill"></i>                
                    </span>
                    <span class="wd-fg-color-gray">  - ${post.time} </span><br />
                    <span class="wd-fg-white">
                        <b> ${post.title} </b>
                    </span>
                </div>           
                <div class="col-2">
                    <img src="${post.image}" class="wd-content-img me-2 mt-1 mb-1">
                </div>
            </div>
        </a>
    `);
}

export default PostSummaryItem;
