import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (<header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
            <li className="nav-item"><Link  className="nav-link active" to="/state">State</Link></li>
            <li className="nav-item mx-2"><Link  className="nav-link active" to="/lazy">Lazy loading</Link></li>
            <li className="nav-item"><Link  className="nav-link active" to="/dynamicComponent">Dynamic component</Link></li>
        </ul>
  </header>)
}

export default Header;