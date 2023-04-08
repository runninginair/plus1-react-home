/**     4.1 Implement a HomeScreen
 * 
 * In a new folder called HomeScreen, use the ExploreScreen implemented
 * earlier as a guide to implement the home screen shown here on the right.
 * 
 * The layout of the screen should be the same as shown.
 * Use the same NavigationSideBar component used earlier on the left side
 * just like in the ExploreScreen from earlier. 
 * 
 * On the right hand side, instead of the WhoToFollowList component, render
 * the PostSummaryList component you implemented earlier.
 * 
 * In the center column, create a new component called PostList in a folder
 * of the same name. Use the component PostSummaryList you created earlier
 * as a guide.
 * 
 * Instead of PostSummaryListItem, create a component PostItem that renders
 * a full post. PostItems render as shown here on the right showing two
 * instances of posts. Create an array called posts that contains all the
 * information you would need to render the two posts shown here on the right.
 * 
 * Use fontawesome icons to render the bottom icons below each of the posts.
 * Make sure the padding and margins are as similar to what is shown in the wireframe.
 */

/**     4.2 Parameterize the NavigationSidebar component
 * 
 * Refactor NavigationSidebar so it accepts active as a parameter. 
 * If parameter is equal to 'home', then the Home hyperlink should be highlighted (active), 
 * if it's equal to 'explore', then the Explore hyperlink should be highlighted (active),
 * and so on for all other hyperlinks.
 * 
 * Refactor the hyperlinks in NavigationSidebar so that you can navigate between the
 * ExploreScreen and HomeScreen. Both are implemented in index.html files located in 
 * folders of the same name as the components.
 * 
 * The hyperlink to the HomeScreen should be ../HomeScreen/index.html 
 * and the hyperlink to the ExploreScreen should be ../ExploreScreen/index.html
 * 
 * Make sure at the end of this assignment that these links work as expected allowing
 * navigation between these two screens.
 */

import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import HomeComponent from "./HomeComponent.js";

function homeInit() {
    $('#wd-homeScreen').append(`

        <div class="row mt-2">
        
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                <!-- <h4>Navigation Sidebar</h4> -->
                ${NavigationSidebar("Home")} 
            </div>

            <div class="col-10 col-lg-7 col-xl-6 bg-light">
                <!-- <h4>Home Component</h4> -->
                ${HomeComponent()}
            </div>

            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <!-- <h4> PostSummaryList </h4> -->
                ${PostSummaryList()}
                
            </div>

        </div>
    `);
}
$(homeInit);
