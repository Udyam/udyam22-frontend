import React, { useEffect, useState } from 'react'
import './Header.css'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import ToggleMenu from './ToggleMenu'
import { Link, useHistory, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAuthContext } from '../authentication/Context/AuthContext'
import axios from 'axios'
import { FaAngleDown } from 'react-icons/fa'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [curPath, setCurPath] = useState('/')
    const toggle = () => setIsVisible(!isVisible)
    const location = useLocation()

    useEffect(() => {
        setCurPath(location.pathname)
    }, [location.pathname])

    const token = localStorage.getItem('userToken')
    let arr
    let token1
    if (token) {
        arr = token.split('"')
        token1 = arr[1]
    }

    const history = useHistory()
    const { logout } = useAuthContext()
    const logoutfn = () => {
        logout()
        history.push('/')
        window.location.reload()
    }
    const [user, setUser] = useState({
        name: 'User',
        email: '',
        college_name: '',
        year: '',
        refferal_code: '',
    })

    useEffect(() => {
        axios
            .get('https://udyam22-backend.herokuapp.com/auth/update/', {
                headers: {
                    Authorization: `Token ${token1}`,
                },
            })
            .then((res) => {
                setUser(res.data)
            })
            .catch(() => {
                //console.log('error')
            })
    }, [])

    var str = user.name
    var matches = str.match(/\b(\w)/g) // ['J','S','O','N']
    var initials = matches.join('') // JSON

    var arrChar = str.split(' ')
    var firstName = arrChar[0]

    function myFunction() {
        var dropdowns = document.getElementsByClassName('dropdown-content')
        var openDropdown = dropdowns[0]
        var openDropdown2 = dropdowns[1]
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show')
        } else {
            document.getElementById('myDropdown').classList.toggle('show')
        }
        if (openDropdown2.classList.contains('show')) {
            openDropdown2.classList.remove('show')
        } else {
            document.getElementById('myDropdown2').classList.toggle('show')
        }
        var arrow = document.getElementsByClassName('DownArrow')
        var openArrow = arrow[0]
        var openArrow2 = arrow[1]
        if (openArrow.classList.contains('rotation')) {
            openArrow.classList.remove('rotation')
            openArrow2.classList.remove('rotation')
        } else {
            openArrow.classList.add('rotation')
            openArrow2.classList.add('rotation')
        }
    }

    if (token1) {
        return [
            '/dashboard',
            '/resetpage',
            '/recoverpage',
            '/notifyreset',
        ].includes(curPath) ? (
            ''
        ) : (
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
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
                            <Link to="/">
                                <img
                                    src="/images/UdyamLogo1.png"
                                    className="logo mx-4"
                                    alt="logo"
                                />
                            </Link>
                            <Nav className="ms-auto " navbar>
                                <NavItem>
                                    <div className="signed-in-details">
                                        <button
                                            onClick={myFunction}
                                            className="dropbtn"
                                        >
                                            <span className="firstName">
                                                {firstName}
                                            </span>
                                            <span className="initials">
                                                {initials}
                                            </span>
                                            <FaAngleDown className="DownArrow" />
                                        </button>
                                        <div
                                            id="myDropdown"
                                            className="dropdown-content"
                                        >
                                            <Link
                                                to="/loginregister"
                                                style={{
                                                    textDecoration: 'none',
                                                }}
                                            >
                                                Dashboard
                                            </Link>
                                            <a href="#" onClick={logoutfn}>
                                                Logout
                                            </a>
                                        </div>
                                    </div>
                                </NavItem>
                            </Nav>
                            <NavbarToggler className="mx-2" onClick={toggle} />
                            <Collapse isOpen={false} navbar>
                                <Nav className="ms-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            exact
                                            to="/events"
                                            style={(isActive) =>
                                                isActive
                                                    ? {
                                                          textDecoration:
                                                              'underline rgba(144, 224, 239, 0.8) solid',
                                                          textDecorationThickness:
                                                              '2px',
                                                          textUnderlinePosition:
                                                              'under',
                                                      }
                                                    : {
                                                          textDecoration:
                                                              'none',
                                                      }
                                            }
                                        >
                                            <div
                                                className="navbar-header-links px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontSize: '2em',
                                                    color: '#FCFBFC',
                                                    marginTop: '0.25em',
                                                }}
                                            >
                                                Events
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            exact
                                            to="/#contactPage"
                                            style={(isActive) =>
                                                isActive
                                                    ? {
                                                          textDecoration:
                                                              'underline rgba(144, 224, 239, 0.8) solid',
                                                          textDecorationThickness:
                                                              '2px',
                                                          textUnderlinePosition:
                                                              'under',
                                                      }
                                                    : {
                                                          textDecoration:
                                                              'none',
                                                      }
                                            }
                                        >
                                            <div
                                                className="navbar-header-links px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontSize: '2em',
                                                    color: '#FCFBFC',
                                                    marginTop: '0.25em',
                                                }}
                                            >
                                                Contact Us
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            exact
                                            to="/noticeboard"
                                            style={(isActive) =>
                                                isActive ||
                                                curPath === '/notice'
                                                    ? {
                                                          textDecoration:
                                                              'underline rgba(144, 224, 239, 0.8) solid',
                                                          textDecorationThickness:
                                                              '2px',
                                                          textUnderlinePosition:
                                                              'under',
                                                      }
                                                    : {
                                                          textDecoration:
                                                              'none',
                                                      }
                                            }
                                        >
                                            <div
                                                className="navbar-header-links px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontSize: '2em',
                                                    color: '#FCFBFC',
                                                    marginTop: '0.25em',
                                                }}
                                            >
                                                Noticeboard
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <div className="dropdownNav mx-3">
                                            <button
                                                onClick={myFunction}
                                                className="dropbtn"
                                            >
                                                {firstName}
                                                <FaAngleDown className="DownArrow" />
                                            </button>
                                            <div
                                                id="myDropdown2"
                                                className="dropdown-content"
                                            >
                                                <Link to="/loginregister">
                                                    Dashboard
                                                </Link>
                                                <a href="#" onClick={logoutfn}>
                                                    Logout
                                                </a>
                                            </div>
                                        </div>
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
        ].includes(curPath) ? (
            ''
        ) : (
            <div
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
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
                            <Link to="/">
                                <img
                                    src="/images/udyamLogo.png"
                                    className="logo mx-4"
                                    alt="logo"
                                />
                            </Link>
                            <Nav className="ms-auto" navbar>
                                <NavItem>
                                    <NavLink
                                        exact
                                        to="/loginregister"
                                        style={(isActive) =>
                                            isActive
                                                ? {
                                                      textDecoration:
                                                          'underline rgba(144, 224, 239, 0.8) solid',
                                                      textDecorationThickness:
                                                          '2px',
                                                      textUnderlinePosition:
                                                          'under',
                                                  }
                                                : {
                                                      textDecoration: 'none',
                                                  }
                                        }
                                    >
                                        <div className="signin-div px-2">
                                            <img src="/icon/sign-in.png" />
                                            Sign in
                                        </div>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarToggler className="mx-2" onClick={toggle} />
                            <Collapse isOpen={false} navbar>
                                <Nav className="ms-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            exact
                                            to="/events"
                                            style={(isActive) =>
                                                isActive
                                                    ? {
                                                          textDecoration:
                                                              'underline rgba(144, 224, 239, 0.8) solid',
                                                          textDecorationThickness:
                                                              '2px',
                                                          textUnderlinePosition:
                                                              'under',
                                                      }
                                                    : {
                                                          textDecoration:
                                                              'none',
                                                      }
                                            }
                                        >
                                            <div
                                                className="navbar-header-links px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontSize: '2em',
                                                    color: '#FCFBFC',
                                                    marginTop: '0.25em',
                                                }}
                                            >
                                                Events
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            exact
                                            to="/#contactPage"
                                            style={(isActive) =>
                                                isActive
                                                    ? {
                                                          textDecoration:
                                                              'underline rgba(144, 224, 239, 0.8) solid',
                                                          textDecorationThickness:
                                                              '2px',
                                                          textUnderlinePosition:
                                                              'under',
                                                      }
                                                    : {
                                                          textDecoration:
                                                              'none',
                                                      }
                                            }
                                        >
                                            <div
                                                className="navbar-header-links px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontSize: '2em',
                                                    color: '#FCFBFC',
                                                    marginTop: '0.25em',
                                                }}
                                            >
                                                Contact Us
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            exact
                                            to="/noticeboard"
                                            style={(isActive) =>
                                                isActive ||
                                                curPath === '/notice'
                                                    ? {
                                                          textDecoration:
                                                              'underline rgba(144, 224, 239, 0.8) solid',
                                                          textDecorationThickness:
                                                              '2px',
                                                          textUnderlinePosition:
                                                              'under',
                                                      }
                                                    : {
                                                          textDecoration:
                                                              'none',
                                                      }
                                            }
                                        >
                                            <div
                                                className="navbar-header-links px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontSize: '2em',
                                                    color: '#FCFBFC',
                                                    marginTop: '0.25em',
                                                }}
                                            >
                                                Noticeboard
                                            </div>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <Link
                                            to="/loginregister"
                                            style={{ textDecoration: 'none' }}
                                        >
                                            <div
                                                className="navbar-header-links px-3"
                                                style={{
                                                    fontFamily:
                                                        'Raleway, sans-serif',
                                                    fontWeight: '900',
                                                    fontSize: '2em',
                                                    color: '#FCFBFC',
                                                    marginTop: '0.25em',
                                                }}
                                            >
                                                <img src="/icon/sign-in.png" />
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
