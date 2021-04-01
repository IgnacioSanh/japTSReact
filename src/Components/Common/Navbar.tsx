import React, {FunctionComponent} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/NavBar'
import Nav from 'react-bootstrap/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'

const NavigationBar: FunctionComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar-green" variant="dark">
            <Link className="navbar-brand" to="/">
                <img id="logo" src="/black-shiba.png" alt="black shiba"/>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/practice">Practice</Link>
                    <Link className="nav-link" to="/library">Library</Link>
                </Nav>
                <Nav>
                    <Link className="nav-link btn btn-sizzling" to="#">
                        <FontAwesomeIcon icon={faSignInAlt} />{' '} Login
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar