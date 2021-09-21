import { useState, useContext } from 'react';
import CoinSummary from './CoinSummary';
import ms from'../../styles/MarketSummary.module.css';
import Context from '../container/CoinContext';

const MarketSummary = () => {
    const coinContext = useContext(Context); // imported from CoinContext.js
    // console.log(coinContext); // check that the correct context data is being imported
    const [search, setSearch] = useState('');
    const handleChange = e => {
        setSearch(e.target.value)
    };
    const filteredCoins = coinContext.coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));
    // coinContext is the data array

    const handleConversion = () => {
        coinContext.setCurrency(!coinContext.currency); // true = AUD
        console.log('clicked');
    };

    return (
        <div className="market-summary">
                <div className={ms.searchContainer}>
                    <h1 className={ms.heading}>SEARCH CURRENCIES</h1>
                    <form action="">
                        <input type="text" placeholder="enter currency" className={ms.input} onChange={handleChange} />
                    </form>
                    <button className={ms.btn} onClick={handleConversion}>{coinContext.currency ? 'Convert to $USD' : 'Convert to $AUD'}</button>
                </div>
                {filteredCoins.map(coin => {
                    return (
                        <CoinSummary coinData={coin}
                             />
                    )
                })}
        </div>
    )
}

export default MarketSummary
