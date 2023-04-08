/** 
 * Implement the NavigationSideBar using javascript object is recommended
 * but not required though.
 */ 

import NavigationList from "./NavivationList.js";

const NavigationSidebar = (active) => {

    return (`
        <div class="list-group">
            <a class="list-group-item" href="/">
                <i class="fab fa-twitter"></i></a>
                <!-- continue rest of list, e.g., Home, Explore, Notifications, Messages, etc. -->
            ${ NavigationList(active) }        
        </div>

        <div class="d-grid mt-2">
            <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
                Tweet</a>
        </div>
    `);
}
export default NavigationSidebar;
