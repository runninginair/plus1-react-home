/**
 * ExploreComponent.js file where you'll render the center column of
 * the ExploreScreen shown here on the right.
 * 
 * Import the PostSummaryList component created earlier to render the
 * bottom half of the screen.
 * 
 * Feel free to reuse HTML from previous assignments to implement the
 * top half including the search input field, the tabs and the image.
 * Here's an example of how the function might look like
 * 
 */

import PostSummaryList from "../PostSummaryList";
const ExploreComponent = () => {
    return (`
        <div class="row">
            <!-- search field and cog -->
        </div>
        
        <ul class="nav mb-2 nav-tabs">
            <!-- tabs -->
        </ul>
        <!-- image with overlaid text -->
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;