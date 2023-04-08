import React from "react";
import { Link } from "react-router-dom";

const NavigationSidebarListItem = (
    {
        item =
        {
            "_id": "home",
            "title": "Home",
            "href": "/",
            "icon": "bi bi-house"
        },
        active
    }
) => {
    return (
        <div>
            <Link
                to={item.href}
                className={`list-group-item ${active === item.name ? 'active' : ''}`}>

                <i className={item.icon}></i> &nbsp;
                {item.title}

            </Link>
        </div>
    );
};

export default NavigationSidebarListItem;