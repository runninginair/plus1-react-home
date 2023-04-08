import PostItem from "./PostItem.js";
import homePost from "./homePost.js";

const PostList = () => {
    return (`
            ${
                homePost.map(aPost => {
                    return(PostItem(aPost));
                }).join('')
            }
    `);
}
export default PostList;
