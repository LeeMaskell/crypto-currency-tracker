import React from 'react';
import WC from '../../styles/WatchedCoin.module.css';
import Context from '../container/CoinContext';
import { useContext } from 'react';

const WatchedCoin = ({coin}) => {
    const coinContext = useContext(Context);
    return (
        <div className={WC.container}>
            <div className={WC.row}>
                <div className={WC.coinType}>
                    <img src={coin.image} alt="crytpto logo" />
                    <h4>{coin.name}</h4>
                    <p className={WC.symbol}>{coin.symbol}</p>
                </div>
                <div className={WC.data}>
                    <p className={WC.price}>${coin.current_price}</p>
                    {coin.price_change_percentage_24h < 0 ? (
                        <p className={`${WC.percent} ${WC.red}`}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    ) : (<p className={`${WC.percent} ${WC.green}`}>{coin.price_change_percentage_24h.toFixed(2)}%</p>)}
                    <button className={WC.btn} onClick={() => coinContext.removeFromWatchlist(coin)}>-</button>
                </div>
            </div>

            
        </div>
    )
}

export default WatchedCoin
