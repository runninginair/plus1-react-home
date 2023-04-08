import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollow from "../WhoToFollowList/index.js";


function exploreComponent() {
    $('#wd-explore').append(`

        <div class="row mt-2">
        
            <div class="col-2 col-md-2 col-lg-1 col-xl-2">
                <!--<h4>Navigation Sidebar</h4>-->
                ${NavigationSidebar("Explore")} 
            </div>

            <div class="col-10 col-lg-7 col-xl-6 bg-light">
                <!--<h4>ExploreComponent</h4>-->
                ${ExploreComponent()}
            </div>

            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <!--<h4>WhoToFollowList </h4>-->
                ${WhoToFollow()}
            </div>

        </div>
    `);
}
$(exploreComponent);
