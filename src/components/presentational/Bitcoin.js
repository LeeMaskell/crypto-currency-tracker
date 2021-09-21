import React from 'react';
import { useContext, useState } from 'react';
import Context from '../container/CoinContext';
import '../../styles/Bitcoin.css';

const Bitcoin = () => {
    const coinContext = useContext(Context); // imported from CoinContext.js
    console.log(coinContext.coins[0]);
    let coin = coinContext.coins[0]
    return (
        <div>

            <div className="global-tile">
                <div className="coin-title">
                    <div className="flex-assist">
                        <img src={coin.image} alt="crytpto logo" />
                        <h1>{coin.name}</h1>
                    </div>
                    <h1 className="bitcoin-margin">${coin.current_price}</h1>
                </div>

                <div className="bitcoin-flex">
                    <div className="properties">
                        <p className="psub">Current price:</p>
                        <p className="psub">24hr High:</p>
                        <p className="psub">24hr Low:</p>
                        <p className="psub">Price Change(24hr):</p>
                        <p className="psub">Price Change %:</p>
                        <p className="psub">Market Capitalistaion:</p>
                        <p className="psub">Total Volume:</p>
                    </div>
                    <div className="values">
                        <p className="psub">${coin.current_price}</p>
                        <p className="psub">${coin.high_24h}</p>
                        <p className="psub">${coin.low_24h}</p>
                        <p className="psub">${coin.price_change_24h.toFixed(2)}</p>
                        <p className="psub">${coin.price_change_percentage_24h}</p>
                        <p className="psub">${coin.market_cap.toLocaleString()}</p>
                        <p className="psub">{coin.total_volume.toLocaleString()}</p>
                    </div>
                </div>




            </div>
        </div>
    )
}

export default Bitcoin
