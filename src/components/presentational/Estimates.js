import React from 'react';
import '../../Estimates.css';
import PriceEstimate from './PriceEstimate';
import Modelling from './Modelling';

const Quotes = () => {
    

    return (
        <div className="estimates">
            <PriceEstimate />
            <Modelling />
        </div>
    )
}

export default Quotes
