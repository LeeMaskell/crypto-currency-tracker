import './App.css';
import { HashRouter, Route } from "react-router-dom";
import MarketSummary from './components/presentational/MarketSummary';
import { CoinProvider } from './components/container/CoinContext';
import Estimates from './components/presentational/Estimates';
import HomeTemp from './components/presentational/HomeTemp';
import Bitcoin from './components/presentational/Bitcoin';


function App() {
  return (
    <HashRouter basename='/'>
      <CoinProvider>
        <Route exact path='/'>
          <HomeTemp />
        </Route>
        <Route path='/market-summary'>
          <MarketSummary />
        </Route>
        <Route path='/estimates'>
          <Estimates />
        </Route>
        <Route path='/bitcoin'>
          <Bitcoin />
        </Route>
      </CoinProvider>
    </HashRouter>
  );
}

export default App;





