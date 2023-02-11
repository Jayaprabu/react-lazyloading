import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (<header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
            <li className="nav-item"><Link  className="nav-link active" to="/state">State</Link></li>
           
        </ul>
  </header>)
}

export default Header;