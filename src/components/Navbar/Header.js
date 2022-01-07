import React, { useEffect, useState } from 'react'
import './Header.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'
import ToggleMenu from './ToggleMenu'
import { Link, useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAuthContext } from '../authentication/Context/AuthContext'

const Header = (props) => {
    const [isVisible, setIsVisible] = useState(false)
    const [curPath, setCurPath] = useState('/')
    const toggle = () => setIsVisible(!isVisible)
    const location = useLocation()

    const history = useHistory()
    const { logout } = useAuthContext()
    const logoutfn = () => {
        logout()
        history.push('/')
    }

    useEffect(() => {
        setCurPath(location.pathname)
    }, [location.pathname])

    console.log(props.FullName);

    if (props.Tokken) {
        return [
            '/dashboard',
            '/resetpage',
            '/recoverpage',
            '/notifyreset',
            '/comingsoon',
        ].includes(curPath) ? (
            ''
        ) : (
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    filter: 'drop-shadow(0px 2px 5px #bebdbd)',
                }}
            >
                <div>
                    <div>
                        <Navbar
                            dark
                            style={{ backgroundColor: '#022049' }}
                            expand="xl"
                        >
                            <Link to="/#landing-page-main-container">
                                <img
                                    src="./images/udyamLogo.png"
                                    className="logo mx-4"
                                    alt="logo"
                                />
                            </Link>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <div
                                        className="dropdown"
                                        style={{
                                            left: 'auto',
                                            rigth: '-1em',
                                            textAlign: 'right',
                                            background: '0',
                                            height:"50px"
                                        }}
                                    >
                                        <button
                                            className="btn  dropdown-toggle btn-lg"
                                            style={{
                                                background: '0',
                                                border: '0',
                                                padding:"0rem 1rem",
                                                fontFamily:
                                                        'Raleway, sans-serif',
                                                fontSize:"2rem",
                                                color: '#CAF0F8',
                                            }}
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            AB
                                        </button>
                                        <ul
                                            className="dropdown-menu "
                                            style={{ minWidth: '7rem',
                                                    backgroundColor:"#022049"}}
                                            aria-labelledby="dropdownMenuButton1"
                                        >
                                            <li>
                                                <Link to="/loginregister" style={{ textDecoration: 'none' }}>
                                                    <div
                                                        className="dropdown-item"
                                                        style={{cursor:"pointer",
                                                            color:"#CAF0F8"}}
                                                    >
                                                        Dashboard
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <div
                                                    className="dropdown-item"
                                                    href="#"
                                                    onClick={logoutfn}
                                                    style={{cursor:"pointer",
                                                            color:"#CAF0F8"}}
                                                >
                                                    Log out
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </NavItem>
                            </Nav>
                            <NavbarToggler className="mx-2" onClick={toggle} />
                            <Collapse isOpen={false} navbar>
                                <Nav className="ms-auto set_size" navbar>
                                    <NavItem>
                                        <NavLink href="/#timeline-main-container">
                                            <div
                                                className="px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontSize: '2em',
                                                    color: '#CAF0F8',
                                                }}
                                            >
                                                Timeline
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/#contact-page-container">
                                            <div
                                                className="px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontSize: '2em',
                                                    color: '#CAF0F8',
                                                }}
                                            >
                                                Contact Us
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <Link
                                            to="/noticeboard"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <div
                                                className="px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontSize: '2em',
                                                    color: '#CAF0F8',
                                                    marginTop: '0.25em',
                                                }}
                                            >
                                                Noticeboard
                                            </div>
                                        </Link>
                                    </NavItem>
                                    
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </div>
                <div style={{ display: isVisible ? '' : 'none' }}>
                    <div style={{ position: 'absolute', top: '0' }}>
                        <ToggleMenu toggle={toggle} />
                    </div>
                </div>
            </div>
        )
    } else {
        return [
            '/dashboard',
            '/resetpage',
            '/recoverpage',
            '/notifyreset',
            '/comingsoon',
        ].includes(curPath) ? (
            ''
        ) : (
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    filter: 'drop-shadow(0px 2px 5px #bebdbd)',
                }}
            >
                <div>
                    <div>
                        <Navbar
                            dark
                            style={{ backgroundColor: '#022049' }}
                            expand="xl"
                        >
                            <Link to="/#landing-page-main-container">
                                <img
                                    src="./images/udyamLogo.png"
                                    className="logo mx-4"
                                    alt="logo"
                                />
                            </Link>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <Link
                                        to="/loginregister"
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <div className="signin-div px-2">
                                            Sign in
                                        </div>
                                    </Link>
                                </NavItem>
                            </Nav>
                            <NavbarToggler className="mx-2" onClick={toggle} />
                            <Collapse isOpen={false} navbar>
                                <Nav className="ms-auto set_size" navbar>
                                    <NavItem>
                                        <NavLink href="/#timeline-main-container">
                                            <div
                                                className="px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontSize: '2em',
                                                    color: '#CAF0F8',
                                                }}
                                            >
                                                Timeline
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="/#contact-page-container">
                                            <div
                                                className="px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontSize: '2em',
                                                    color: '#CAF0F8',
                                                }}
                                            >
                                                Contact Us
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <Link
                                            to="/noticeboard"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <div
                                                className="px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontSize: '2em',
                                                    color: '#CAF0F8',
                                                    marginTop: '0.25em',
                                                }}
                                            >
                                                Noticeboard
                                            </div>
                                        </Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link
                                            to="/loginregister"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <div
                                                className="px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontWeight: 'bolder',
                                                    fontSize: '2em',
                                                    color: '#CAF0F8',
                                                    marginTop: '0.25em',
                                                }}
                                            >
                                                Sign in
                                            </div>
                                        </Link>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                </div>
                <div style={{ display: isVisible ? '' : 'none' }}>
                    <div style={{ position: 'absolute', top: '0' }}>
                        <ToggleMenu toggle={toggle} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
