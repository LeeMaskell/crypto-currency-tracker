import React from 'react';
import { useContext } from 'react';
import Context from '../container/CoinContext';
import WatchedCoin from './WatchedCoin';
import WcCSS from '../../styles/WatchedCoin.module.css';

const Watchlist = ({hide}) => {
    const coinContext = useContext(Context);
    return (
        <div className={`watchlist ${hide ? "hidePanelMobile" : ""}`}>
            <div className={WcCSS.stickyHeading}>
                <h1 className={WcCSS.text}>WATCHLIST</h1>
            </div>
            {coinContext.watchlist.map((coinData) => {
                return <WatchedCoin
                    coin={coinData}
                />
            }
            )

            }
        </div>
    )
}

export default Watchlist
