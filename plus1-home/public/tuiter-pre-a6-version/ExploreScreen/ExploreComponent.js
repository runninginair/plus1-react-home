import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import SearchBar from "./SearchBar.js";
import NavBar from "./NavBar.js";

const ExploreComponent = () => {
    return (`
        <div class="row mb-2">
            <!-- search field and cog -->
            ${SearchBar()}
        </div>

        <ul class="nav mb-2 nav-tabs">
            <!-- tabs -->
            ${NavBar()}
        </ul>
    
        <!-- image with overlaid text -->
        <div class="flex-container-0 for_img">
            <a href="https://www.spacex.com/vehicles/starship/">
                <img src="../../images/Starship-Mk1-Day.jpg" class="img-fluid wd-mt-mb">        
            </a>
            <div class="bottom-left">
                <span class="fs-3"><b>SpaceX's Starship</b></span>
            </div>
        </div>

        ${PostSummaryList()}
    `);
}
export default ExploreComponent;