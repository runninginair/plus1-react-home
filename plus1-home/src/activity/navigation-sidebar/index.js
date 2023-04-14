import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = () => {

    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a className="list-group-item">
                <h1 className="fw-bolder center">
                    <span className="text-danger">+</span>
                    <span>1</span><i className="bi bi-badge-tm fs-6"></i>
                    </h1>
                <h1 className="d-none d-xl-inline-block d-xxl-inline-block text-danger fw-bolder align-content-center">
                    PlusOne
                </h1>
                <h3 className="d-none d-xl-inline-block d-xxl-inline-block text-primary ms-4">Workout</h3>
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> Track & Eval Your Workout Performance </span>
                &nbsp;
            </a>
            <Link to="home" className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <i className="bi bi-house-heart-fill"></i> &nbsp;
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> Home </span>
            </Link>

            <Link to="explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <i className="bi bi-hash"></i> &nbsp;
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> Explore </span>
            </Link>

            <Link to="notifications" className={`list-group-item ${active === 'notifications' ? 'active' : ''}`}>
                <i className="bi bi-bell"></i> &nbsp;
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> Notifications </span>
            </Link>

            <Link to="messages" className={`list-group-item ${active === 'messages' ? 'active' : ''}`}>
                <i className="bi bi-envelope"></i> &nbsp;
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> Messages </span>
            </Link>

            <Link to="lists" className={`list-group-item ${active === 'lists' ? 'active' : ''}`}>
                <i className="bi bi-list-check"></i> &nbsp;
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> Lists </span>
            </Link>

            <Link to="profile" className={`list-group-item 
                ${(active === ('profile' || 'edit-profile'))? 'active' : ''}`}>
                <i className="bi bi-person-lines-fill"></i> &nbsp;
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> Profile </span>
            </Link>

            <Link to="/" className={`list-group-item ${active === 'more' ? 'active' : ''}`}>
                <i className="bi bi-three-dots"></i> &nbsp;
                <span className="d-none d-xl-inline-block d-xxl-inline-block"> More </span>
            </Link>
        </div>
    );
};

export default NavigationSidebar;