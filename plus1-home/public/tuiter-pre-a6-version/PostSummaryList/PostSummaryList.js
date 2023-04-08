import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js";

const PostSummaryList = () => {
    return (`
            ${
                post.map(aPost => {
                    return(PostSummaryItem(aPost));
                }).join('')
            }
    `);
}
export default PostSummaryList;
