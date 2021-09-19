import React from 'react'
import { useContext, useState } from 'react';
import Context from '../container/CoinContext';
import '../../Estimates.css'

const PriceEstimate = () => {

    const coinContext = useContext(Context); // imported from CoinContext.js
    console.log(coinContext); // check that the correct context data is being imported

    // state defining coin price, desired quantity and the cost
    const [currencyChoice, setCurrencyChoice] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [cost, setCost] = useState(null);

    const test = (e) => {
        console.log(e.target.value);
        setCurrencyChoice(e.target.value)
    }
    const costCalculator = (e) => {
        e.preventDefault();
        setCost(quantity * currencyChoice);
    }

    return (
        <div className="estimates">
             <div className="global-tile">
                <h1 className="estimates__text">PRICE ESTIMATES</h1>
                <div className="price-estimates__input">
                    <form action="">
                        <div className="input-currency">
                            <label htmlFor="" className="white">Currency</label>
                            <select className="white background" name="currency" id="currency" value={currencyChoice} onChange={test}>
                                <option disabled selected value> -- select an option -- </option>
                                {
                                    coinContext.coins.map(item => {
                                        return <option value={item.current_price}>{item.name}</option>
                                    })
                                }
                            </select>
                            {/* <h4 className="white inline background padding">${currencyChoice}</h4> */}
                        </div>
                        <label className="white">Quantity</label>
                        <input className="white" placeholder="enter quantity" type="text" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </form>
                </div>
                <button className="btn" onClick={costCalculator}>Calculate Cost</button>
                <div className="price-estimate__cost-display">
                <h4 className="white inline background">(CURRENT UNIT PRICE: ${currencyChoice})</h4>
                    <h2 className="white background">COST ESTIMATE:  ${cost} AUD</h2>
                </div>
            </div>
        </div>
    )
}

export default PriceEstimate
