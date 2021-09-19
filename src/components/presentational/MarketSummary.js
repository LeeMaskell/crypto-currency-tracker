import { useState, useContext } from 'react';
import CoinSummary from './CoinSummary';
import '../../MarketSummary.css';
import Context from '../container/CoinContext';

const MarketSummary = () => {
    const coinContext = useContext(Context); // imported from CoinContext.js
    console.log(coinContext); // check that the correct context data is being imported
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
                <div className="market-summary__search">
                    <h1 className="market-summary__heading">SEARCH CURRENCIES</h1>
                    <form action="">
                        <input type="text" placeholder="enter currency" className="market-summary__input" onChange={handleChange} />
                    </form>
                </div>
                <button className="btn" onClick={handleConversion}>{coinContext.currency ? 'Convert to $USD' : 'Convert to $AUD'}</button>
                

                {filteredCoins.map(coin => {
                    return (
                        <CoinSummary key={coin.id}
                            name={coin.name}
                            image={coin.image}
                            symbol={coin.symbol}
                            marketcap={coin.market_cap}
                            price={coin.current_price}
                            priceChange={coin.price_change_percentage_24h}
                            volume={coin.total_volume} />
                    )
                })}
        </div>
    )
}

export default MarketSummary
