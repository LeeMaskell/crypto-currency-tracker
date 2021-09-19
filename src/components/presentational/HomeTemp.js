import React from 'react'
import { Link } from 'react-router-dom';

const HomeTemp = () => {
    return (
        <div className="home">
            <Link to="/estimates"><button className="nav-btn">Estimates</button></Link>
            <Link to="/market-summary"><button className="nav-btn">Market Summary</button></Link>
            <Link to="/watchlist"><button className="nav-btn">Watch List</button></Link>
            <Link to="/bitcoin"><button className="nav-btn">Bitcoins</button></Link>
        </div>
    )
}

export default HomeTemp
