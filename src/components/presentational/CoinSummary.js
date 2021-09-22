import React from 'react'
import Context from '../container/CoinContext';
import { useContext } from 'react';
import cs from '../../styles/CoinSummary.module.css';

const CoinSummary = ({ coinData }) => {
    const coinContext = useContext(Context);
    return (
        <div className={cs.container}>
            <div className={cs.row}>
                <div className={cs.coinType}>
                    <img src={coinData.image} alt="crytpto logo" />
                    <h4>{coinData.name}</h4>
                </div>
                <div className={cs.priceFlex}>
                    {/* <p className={cs.symbol}>{coinData.symbol}</p> */}
                    <p className={cs.price}>${coinData.current_price}</p>
                </div>
                <div className={cs.percentageFlex}>
                    {coinData.price_change_percentage_24h < 0 ? (
                        <p className={`${cs.percent} ${cs.red}`}>{coinData.price_change_percentage_24h.toFixed(2)}%</p>
                    ) : (<p className={`${cs.percent} ${cs.green}`}>{coinData.price_change_percentage_24h.toFixed(2)}%</p>)}
                </div>
                <div className={cs.buttonFlex}>
                    <button className={cs.btn} onClick={() => coinContext.addToWatchlist(coinData)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CoinSummary