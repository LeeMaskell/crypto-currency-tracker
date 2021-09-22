import React from 'react';
import NavbarCSS from '../../styles/Navbar.module.css';
import { useState } from 'react';

const Navbar = ({ hideFunction }) => {
    const [show, setShow] = useState(false);
    const navbarLogic = (ob) => {
        hideFunction(ob);
        setShow(!show);
    }

    return (
        <nav className={NavbarCSS.navbar}>
            <div className={NavbarCSS.flexContainer}>
                <div className={NavbarCSS.icon} onClick={() => setShow(!show)}>&#9776;</div>
            </div>
            <div className={show ? `${NavbarCSS.navLink} ${NavbarCSS.showLink}` : `${NavbarCSS.navLink}`} >
                <ul>
                    <li className={NavbarCSS.item} onClick={() => navbarLogic({
                        MarketSummary: false,
                        PriceEstimate: true,
                        Modelling: true,
                        Watchlist: true
                    })}>Market Summary</li>
                    <li className={NavbarCSS.item} onClick={() => navbarLogic({
                        MarketSummary: true,
                        PriceEstimate: false,
                        Modelling: true,
                        Watchlist: true
                    })}>Price Estimates</li>
                    <li className={NavbarCSS.item} onClick={() => navbarLogic({
                        MarketSummary: true,
                        PriceEstimate: true,
                        Modelling: false,
                        Watchlist: true
                    })}>Modelling</li>
                    <li className={NavbarCSS.item} onClick={() => navbarLogic({
                        MarketSummary: true,
                        PriceEstimate: true,
                        Modelling: true,
                        Watchlist: false
                    })}>Watchlist</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
