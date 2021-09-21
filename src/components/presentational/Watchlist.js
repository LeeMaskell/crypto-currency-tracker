import React from 'react';
import { useContext } from 'react';
import Context from '../container/CoinContext';
import WatchedCoin from './WatchedCoin';
import WC from '../../styles/WatchedCoin.module.css';

const Watchlist = () => {
    const coinContext = useContext(Context);
    return (
        <div className="watchlist">
            <div className={WC.stickyHeading}>
                <h1 className={WC.text}>WATCHLIST</h1>
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
