import React, { useState } from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {

    let [startDate, setStartDate] = useState('');
    let [endDate, setEndDate] = useState('');

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
                    <a className="nav-link"> Your Achivement </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link"> Your Workout Plan </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active"> Calculate Your Workout by Time Range</a>
                </li>
            </ul>
            <div className="mb-2">
                <br /><br />
                <h1 className="text-primary">
                    Workout Search
                </h1><br />

                <select className="form-select">
                    <option selected="">Please select a detail you would like to search...</option>
                    <option value="calories">Calories</option>
                    <option value="distance">Distance</option>
                    <option value="steps">Steps</option>
                </select><br />

                <div className="fw-bold">Start Date</div>
                <textarea value={startDate}
                    placeholder="YYYY-MM-DD"
                    className="form-control border-0"
                    onChange={(event) => setStartDate(event.target.value)}>
                </textarea>

                <div className="fw-bold">End Date</div>
                <textarea value={endDate}
                    placeholder="YYYY-MM-DD"
                    className="form-control border-0"
                    onChange={(event) => setEndDate(event.target.value)}>
                </textarea><br />

                {/* <button className="btn-close-white float-end ">  */}
                <button className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold">
                    Search
                </button>
            </div>
            {/* <PostSummaryList /> */}
        </>
    );
};

export default ExploreComponent;