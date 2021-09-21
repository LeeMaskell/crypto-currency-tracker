import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const Context = createContext();

function CoinProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState(true);
  let currencyChange = 'aud';
  currency == true ? currencyChange = 'aud' : currencyChange = 'usd';

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyChange}&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
      .then(res => {
        setCoins(res.data);
      }).catch(error => console.log(error))
  }, [currency]);

  const [watchlist, setWatchlist] = useState([]);
  const addToWatchlist = (coinData) => {
    console.log(coinData);
    setWatchlist([...watchlist, coinData]);
  }
  const removeFromWatchlist = (coin) => {
    const updatedWatchList = watchlist.filter((item) => item.name !== coin.name);
    setWatchlist(updatedWatchList);
  }


  return (
    //children prop required to allow contents(children) warpped in the provider to access the context
    <Context.Provider value={{ coins, setCurrency, currency, watchlist, setWatchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </Context.Provider>
  )
}

export { CoinProvider }; // used in app wrapping the top level components
export default Context; // used throughtout component hieracrchy to allow access to context. Used as deafult export as it will be used by multiple components.

// consider the concept of provider and consumer

