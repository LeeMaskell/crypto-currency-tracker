import React from 'react'
import Context from '../container/CoinContext';
import { useState, useContext } from 'react';
import cs from '../../styles/CoinSummary.module.css';

const CoinSummary = ({ coinData }) => {
    const coinContext = useContext(Context);
    const [display, setDisplay] = useState(false);
    return (
        <div className={cs.container}>
            <div className={cs.contentFlex}>
                <section className={cs.row}>
                    <div className={cs.coinType}>
                        <img src={coinData.image} alt="crytpto logo" />
                        <h4 onClick={() => setDisplay(true)}>{coinData.name}</h4>
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
                </section>
                <section className={display ? `${cs.row}` : `${cs.noRow}`}>
                    <div className={cs.closeBtn}>
                        <h2 onClick={() => setDisplay(false)}>x</h2>
                    </div>
                    <div className={cs.displayFlex}>
                        <p>Variation: ${coinData.price_change_24h.toFixed(2)}</p>
                    </div>
                    <div className={cs.displayFlex}>
                        <p>24hr high: ${coinData.high_24h.toFixed(2)}</p>
                    </div>
                    <div className={cs.displayFlex}>
                        <p>24hr low: ${coinData.low_24h.toFixed(2)}</p>
                    </div>
                    <div className={cs.mktCapConatainer}>
                        <p>Mkt Cap: ${coinData.market_cap.toLocaleString()}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CoinSummary