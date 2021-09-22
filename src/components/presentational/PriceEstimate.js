import React from 'react'
import { useContext, useState } from 'react';
import Context from '../container/CoinContext';
import PeCSS from '../../styles/PriceEstimate.module.css'

const PriceEstimate = ({hide}) => {

    const coinContext = useContext(Context); // imported from CoinContext.js
    console.log(coinContext); // check that the correct context data is being imported

    // state defining coin price, desired quantity and the cost
    const [currencyChoice, setCurrencyChoice] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const [cost, setCost] = useState(null);

    const conversion  = (e) => {
        console.log(e.target.value);
        setCurrencyChoice(e.target.value)
    }
    const costCalculator = (e) => {
        e.preventDefault();
        setCost(quantity * currencyChoice);
    }
    

    return (
        <div className={`estimates ${hide ? "hidePanelMobile" : ""}`}>
            <h1 className={PeCSS.text}>PRICE ESTIMATES</h1>
            <div className={PeCSS.dataInput}>
                <form className={PeCSS.flexContainer}action="">
                        <label htmlFor="" className={PeCSS.label}>Currency</label>
                        <select className={PeCSS.select} name="currency" id="currency" value={currencyChoice} onChange={conversion}>
                            <option disabled selected value> -- select an option -- </option>
                            {
                                coinContext.coins.map(item => {
                                    return <option value={item.current_price}>{item.name}</option>
                                })
                            }
                        </select>
                    <label className={PeCSS.label}>Quantity</label>
                    <input className={PeCSS.input} placeholder="enter quantity" type="text" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </form>
            </div>
            
            <div className={PeCSS.costDisplay}>
            <button className={PeCSS.btn} onClick={costCalculator}>Calculate Cost</button>
                <h4 className={PeCSS.white}>(CURRENT UNIT PRICE: ${currencyChoice})</h4>
                <h2 className={PeCSS.white}>COST ESTIMATE: ${cost} AUD</h2>
            </div>
        </div>
    )
}

export default PriceEstimate
