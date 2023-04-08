/** 2.9 Implementing a Navigation component
 * The navigation links in the three components, Labs, HelloWorld, and Tuiter,
 * would be best implemented as a reusable component as shown below.
 */

import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Admin Login</Link> |
            <Link to="/">User Login</Link> |
            <Link to="/a7">Search Activities</Link> |
            <Link to="/tuiter">Update user proflie</Link>
        </div>
    );
}

export default Nav;