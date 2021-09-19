import React from 'react';
import { useContext, useState } from 'react';
import Context from '../container/CoinContext';
import '../../Estimates.css';

const Modelling = () => {
    const coinContext = useContext(Context); // imported from CoinContext.js
    console.log(coinContext); // check that the correct context data is being imported

    

    // state defining purcahse price, purchase quantity, sale value and the total estimated value
    const [purchase, setPurchase] = useState(null);
    const [sell, setSell] = useState(null);
    const [purchaseQuantity, setPurchaseQuantity] = useState(null);
    const [estimate, setEstimate] = useState(null);


    const estimateCalculator = (e) => {
        e.preventDefault();
        setEstimate((sell * purchaseQuantity) -(purchase * purchaseQuantity));
    }
    return (
        <div className="modelling">
           <div className="global-tile">
                <h1 className="estimates__text">Modelling</h1>
                <div className="price-estimates__input">
                    <form action="" >
                        <div className="flex">
                            <label className="white">Purchase Quantity</label>
                            <input className="white" placeholder="enter quantity" type="text" id="purchaseQuantity" name="purchaseQuantity" value={purchaseQuantity} onChange={(e) => setPurchaseQuantity(e.target.value)} />
                        </div>
                        <div className="flex">
                            <label className="white">Value on Purchase</label>
                            <input className="white" placeholder="enter value" type="text" id="purchasePrice" name="purchasePrice" value={purchase} onChange={(e) => setPurchase(e.target.value)} />
                        </div>
                        <div className="flex">
                            <label className="white">Estimated Sale Value</label>
                            <input className="white" placeholder="enter value" type="text" id="sellPrice" name="sellPrice" value={sell} onChange={(e) => setSell(e.target.value)} />
                        </div>

                    </form>
                </div>
                <button className="btn" onClick={estimateCalculator}>Calculate Value</button>
                <div className="price-estimate__cost-display">
                    {estimate > 0 ? (
                         <h2 className="green background">ESTIMATED VALUE:  ${estimate} AUD</h2>
                    ) : (
                        <h2 className="red background">ESTIMATED VALUE:  ${estimate} AUD</h2>
                    )
                    }
                   
                </div>
            </div> 
        </div>
    )
}

export default Modelling
