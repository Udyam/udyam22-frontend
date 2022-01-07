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
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [curPath, setCurPath] = useState('/')
    const toggle = () => setIsVisible(!isVisible)
    const location = useLocation()

    useEffect(() => {
        setCurPath(location.pathname)
    }, [location.pathname])

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
                                src="/images/udyamLogo.png"
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
                        <NavbarToggler className="mx-3" onClick={toggle} />
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

export default Header
