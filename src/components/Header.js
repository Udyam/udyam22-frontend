import React, { useState } from 'react'
import './Header.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'
import ToggleMenu from './ToggleMenu'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false)
    const toggle = () => setIsVisible(!isVisible)

    return (
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
                        <NavbarBrand href="/#landing-page-main-container">
                            <img
                                src="./images/udyamLogo.png"
                                className="logo mx-4"
                                alt="logo"
                            />
                        </NavbarBrand>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <NavLink href="#">
                                    <div className="signin-div px-2">
                                        Sign in
                                    </div>
                                </NavLink>
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
                                    <NavLink href="/noticeboard">
                                        <div
                                            className="px-3"
                                            style={{
                                                fontFamily:
                                                    'Raleway, sans-serif',
                                                fontSize: '2em',
                                                color: '#CAF0F8',
                                            }}
                                        >
                                            Noticeboard
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/loginregister">
                                        <div
                                            className="px-3"
                                            style={{
                                                fontFamily:
                                                    'Raleway, sans-serif',
                                                fontWeight: 'bolder',
                                                fontSize: '2em',
                                                color: '#CAF0F8',
                                            }}
                                        >
                                            Sign in
                                        </div>
                                    </NavLink>
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
