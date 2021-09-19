import React from 'react'
import '../../coinSummary.css';

const CoinSummary = ({name, image, symbol, price, priceChange, volume, marketcap}) => {
    
    return (
        <div className="coin-container">
            <div className="coin-summary__row">
                <div className="coin">
                    <img src={image} alt="crytpto logo" />
                    <h1>{name}</h1>
                    <p className="coin-summary__symbol">{symbol}</p>
                </div>
                <div className="coin-summary__data">
                    <p className="coin-summary__price">{price}</p>
                    <p className="coin-summary__volume">${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className="p.coin-percent red">{priceChange.toFixed(2)}%</p> 
                        ) : ( <p className="p.coin-percent green">{priceChange.toFixed(2)}%</p>)}
                        <p className="coin-summary__marketcap">
                            Mkt Cap: ${marketcap.toLocaleString()}
                        </p>
                </div>
            </div>
        </div>
    )
}

export default CoinSummary