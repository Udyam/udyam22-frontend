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
    UncontrolledDropdown,
} from 'reactstrap'
import ToggleMenu from './ToggleMenu'


const Header = () => {
    const [isVisible, setIsVisible] = useState(false)
    const toggle = () => setIsVisible(!isVisible)

    return (
        <>
            <div>
                <div>
                    <Navbar
                        dark
                        style={{ backgroundColor: 'rgba(202, 240, 248, 0.17)' }}
                        expand="md"
                    >
                        <NavbarBrand href="/">
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
                            <UncontrolledDropdown
                                nav
                                inNavbar
                            ></UncontrolledDropdown>
                        </Nav>
                        <NavbarToggler className="mx-3" onClick={toggle} />
                        <Collapse isOpen={false} navbar>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink href="#">
                                        <div
                                            className="px-4"
                                            style={{
                                                fontWeight: 'lighter',
                                                fontSize: '2em',
                                                color: '#CAF0F8',
                                            }}
                                        >
                                            Timeline
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <div
                                            className="px-4"
                                            style={{
                                                fontWeight: 'lighter',
                                                fontSize: '2em',
                                                color: '#CAF0F8',
                                            }}
                                        >
                                            Contact Us
                                        </div>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">
                                        <div
                                            className="px-4"
                                            style={{
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
        </>
    )
}

export default Header
