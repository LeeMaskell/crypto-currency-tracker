import React from 'react';
import { useContext, useState } from 'react';
import Context from '../container/CoinContext';
import ModellingCSS from'../../styles/Modelling.module.css';

const Modelling = ({hide}) => {
    const coinContext = useContext(Context); // imported from CoinContext.js
    console.log(coinContext); // check that the correct context data is being imported

    // state defining purcahse price, purchase quantity, sale value and the total estimated value
    const [purchase, setPurchase] = useState(null);
    const [sell, setSell] = useState(null);
    const [purchaseQuantity, setPurchaseQuantity] = useState(null);
    const [estimate, setEstimate] = useState(null);


    const estimateCalculator = (e) => {
        e.preventDefault();
        setEstimate((sell * purchaseQuantity) - (purchase * purchaseQuantity));
    }
    return (
        <div className={`modelling ${hide ? "hidePanelMobile" : ""}`}>
            <h1 className={ModellingCSS.text}>Modelling</h1>
            <div className={ModellingCSS.input}>
                <form className={ModellingCSS.form} action="" >
                    
                        <label className="white">Purchase Quantity</label>
                        <input  placeholder="enter quantity" type="text" id="purchaseQuantity" name="purchaseQuantity" value={purchaseQuantity} onChange={(e) => setPurchaseQuantity(e.target.value)} />
                   
                   
                        <label className="white">Value on Purchase</label>
                        <input  placeholder="enter value" type="text" id="purchasePrice" name="purchasePrice" value={purchase} onChange={(e) => setPurchase(e.target.value)} />
                   
                        <label className="white">Estimated Total Sale Value</label>
                        <input  placeholder="enter value" type="text" id="sellPrice" name="sellPrice" value={sell} onChange={(e) => setSell(e.target.value)} />
                   

                </form>
            </div>
            
            <div className={ModellingCSS.costDisplay}>
            <button className={ModellingCSS.btn} onClick={estimateCalculator}>Calculate Value</button>
                {estimate > 0 ? (
                    <h2 className={ModellingCSS.red}>ESTIMATED VALUE:  ${estimate} AUD</h2>
                ) : (
                    <h2 className={ModellingCSS.green}>ESTIMATED VALUE:  ${estimate} AUD</h2>
                )
                }

            </div>
        </div>
    )
}

export default Modelling
