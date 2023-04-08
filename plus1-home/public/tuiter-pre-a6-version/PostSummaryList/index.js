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



// <!-- Search Bar -->
// <div class="row">
//     <div class="col row">

//         <div class="col-11">
//             <div class="form">
//                 <i class="fa fa-search" style="font-size: 1.2em;"></i>
//                 <input type="text" class="form-control form-input" placeholder="Search Tuiter...">
//                 <span class="left-pan"></span>
//             </div>
//         </div>
//         <div class="col-1 float-right">
//             <a href="#">
//                 <i class="fas fa-cog fa-spin mt-1" style="font-size: 2em; color: #0d6efd;"></i>
//             </a>
//         </div>
//     </div>
// </div>
