import React, { useEffect, useState } from 'react'
import './Footer.css'
import { Logo } from './Logo/Logo'
import { SocialTray } from './SocialTray/SocialTray'
import { useLocation } from 'react-router-dom'

export const Footer = () => {
    const [curPath, setCurPath] = useState('/')
    const location = useLocation()

    useEffect(() => {
        setCurPath(location.pathname)
    }, [location.pathname])

    return [
        '/dashboard',
        '/noticeboard',
        '/resetpage',
        '/recoverpage',
        '/notifyreset',
        '/notice',
        '/comingsoon',
    ].includes(curPath) ? (
        ''
    ) : (
        <>
            <div className="footer">
                <Logo />
                <SocialTray />
            </div>
        </>
    )
}
