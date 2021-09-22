import React from 'react'
import Context from '../container/CoinContext';
import { useState, useContext } from 'react';
import CsCSS from '../../styles/CoinSummary.module.css';

const CoinSummary = ({ coinData }) => {
    const coinContext = useContext(Context);
    const [display, setDisplay] = useState(false);
    return (
        <div className={CsCSS.container}>
            <div className={CsCSS.contentFlex}>
                <section className={CsCSS.row}>
                    <div className={CsCSS.coinType}>
                        <img src={coinData.image} alt="crytpto logo" />
                        <h4 onClick={() => setDisplay(true)}>{coinData.name}</h4>
                    </div>
                    <div className={CsCSS.priceContainer}>
                        {/* <p className={cs.symbol}>{coinData.symbol}</p> */}
                        <p className={CsCSS.price}>${coinData.current_price}</p>
                    </div>
                    <div className={CsCSS.percentageContainer}>
                        {coinData.price_change_percentage_24h < 0 ? (
                            <p className={`${CsCSS.percent} ${CsCSS.red}`}>{coinData.price_change_percentage_24h.toFixed(2)}%</p>
                        ) : (<p className={`${CsCSS.percent} ${CsCSS.green}`}>{coinData.price_change_percentage_24h.toFixed(2)}%</p>)}
                    </div>
                    <div className={CsCSS.addButtonContainer}>
                        <button className={CsCSS.btn} onClick={() => coinContext.addToWatchlist(coinData)}>+</button>
                    </div>
                </section>
                <section className={display ? `${CsCSS.row}` : `${CsCSS.noRow}`}>
                    <div className={CsCSS.closeBtn}>
                        <h2 onClick={() => setDisplay(false)}>x</h2>
                    </div>
                    <div className={CsCSS.flexItem}>
                        <p>Variation: ${coinData.price_change_24h.toFixed(2)}</p>
                    </div>
                    <div className={CsCSS.flexItem}>
                        <p>24hr high: ${coinData.high_24h.toFixed(2)}</p>
                    </div>
                    <div className={CsCSS.flexItem}>
                        <p>24hr low: ${coinData.low_24h.toFixed(2)}</p>
                    </div>
                    <div className={CsCSS.mktCapFlexItem}>
                        <p>Mkt Cap: ${coinData.market_cap.toLocaleString()}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CoinSummary