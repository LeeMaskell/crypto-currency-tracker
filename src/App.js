import './styles/App.css';
import { HashRouter, Route } from "react-router-dom";
import MarketSummary from './components/presentational/MarketSummary';
import { CoinProvider } from './components/container/CoinContext';
import PriceEstimate from './components/presentational/PriceEstimate';
import Modelling from './components/presentational/Modelling';
import Watchlist from './components/presentational/Watchlist';


function App() {
  return (
    <div className="home">
      <CoinProvider>
        <MarketSummary />
        <PriceEstimate />
        <Modelling />
        <Watchlist />
      </CoinProvider>
    </div>
  );
}

export default App;





