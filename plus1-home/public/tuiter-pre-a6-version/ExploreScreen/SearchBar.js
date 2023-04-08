const SearchBar = () => {
    return (`

        <div class="row align-items-center justify-content-between">
            <div class="col">
                <div class="form">
                    <i class="fa fa-search" style="font-size: 1.2em;"></i>
                    <input type="text" class="form-control form-input" placeholder="Search Tuiter...">
                    <span class="left-pan"></span>
                </div>
            </div>
            <div class="col-1">
                <span>
                    <a href="#">
                        <i class="fas fa-cog fa-spin mt-1" style="font-size: 2em; color: #0d6efd;"></i>
                    </a>
                </span>
            </div>
        </div>

    `);
}
export default SearchBar;