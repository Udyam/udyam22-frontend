import React from "react";
import "./Footer.css";
import { Logo } from "./Logo/Logo";
import { SocialTray } from "./SocialTray/SocialTray";

export const Footer = () =>
{
    return (
        <>
            <div className="footer">
                <Logo/>
                <SocialTray/>
            </div>
        </>
    )
}
