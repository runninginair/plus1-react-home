import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                        className="form-control rounded-pill ps-5" />
                    <i className="bi bi-search position-absolute wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active"> You Achivement </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"> Your plan </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"> Calculate Your Workout </a>
                </li>
            </ul>
            <div className="mb-2">
                <h1 className="wd-nudge-up text-green">
                    Workout Search</h1>
            </div>
            {/* <PostSummaryList /> */}
        </>
    );
};

export default ExploreComponent;