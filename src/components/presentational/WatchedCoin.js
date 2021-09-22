import React from 'react';
import WcCSS from '../../styles/WatchedCoin.module.css';
import Context from '../container/CoinContext';
import { useContext } from 'react';

const WatchedCoin = ({ coin }) => {
    const coinContext = useContext(Context);
    return (
        <div className={WcCSS.container}>
            <div className={WcCSS.row}>
                <div className={WcCSS.coinType}>
                    <img src={coin.image} alt="crytpto logo" />
                    <h4>{coin.name}</h4>
                    {/* <p className={WC.symbol}>{coin.symbol}</p> */}
                </div>
                <div className={WcCSS.priceContainer}>
                    <p className={WcCSS.price}>${coin.current_price}</p>
                </div>
                <div className={WcCSS.percentageContainer}>
                    {coin.price_change_percentage_24h < 0 ? (
                        <p className={`${WcCSS.percent} ${WcCSS.red}`}>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    ) : (<p className={`${WcCSS.percent} ${WcCSS.green}`}>{coin.price_change_percentage_24h.toFixed(2)}%</p>)}
                </div>
                <div className={WcCSS.removeBtnConatainer}>
                    <button className={WcCSS.btn} onClick={() => coinContext.removeFromWatchlist(coin)}>-</button>
                </div>
            </div>
        </div>

    )
}

export default WatchedCoin
