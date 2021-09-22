import './styles/App.css';
import { HashRouter, Route } from "react-router-dom";
import MarketSummary from './components/presentational/MarketSummary';
import { CoinProvider } from './components/container/CoinContext';
import PriceEstimate from './components/presentational/PriceEstimate';
import Modelling from './components/presentational/Modelling';
import Watchlist from './components/presentational/Watchlist';
import Navbar from './components/presentational/Navbar';
import {useState } from 'react';


function App() {
  // const pagesToHideMobile = 
  const [pagesToHideMobile, setPagesToHide] = useState({MarketSummary: false, 
                                                  PriceEstimate: true,
                                                  Modelling: true,
                                                  Watchlist: true});
  return (
    <div className="home">
      <CoinProvider>
        <Navbar hideFunction={setPagesToHide}/>
        <MarketSummary hide={pagesToHideMobile.MarketSummary}/>
        <PriceEstimate hide={pagesToHideMobile.PriceEstimate} />
        <Modelling hide={pagesToHideMobile.Modelling}/>
        <Watchlist hide={pagesToHideMobile.Watchlist}/>
      </CoinProvider>
    </div>
  );
}

export default App;





