import React, {FunctionComponent} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faBook, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar : FunctionComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-green bg-light">
            <Link className="navbar-brand" to="/">
                <img id="logo" src="/black-shiba.png" alt="black shiba"/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/practice"> <FontAwesomeIcon icon={faGraduationCap} /> Practice</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/library"><FontAwesomeIcon icon={faBook} /> Library </Link>
                    </li>
                </ul>
                <ul className="navbar-nav d-flex flex-row-reverse">
                    <li className="nav-item">
                        <Link className="nav-link btn btn-sizzling" to="#">
                            <FontAwesomeIcon icon={faSignInAlt} />{' '} Login
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;