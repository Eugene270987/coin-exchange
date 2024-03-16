import './App.scss';
import Header from "../Header/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "../Footer/Footer";
import HomePage from "../../pages/Homepage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import CoinCataloguePage from "../../pages/CoinCataloguePage/CoinCataloguePage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import SouvenirsPage from "../../pages/SouvenirsPage/SouvenirsPage";
import ExchangePage from "../../pages/ExchangePage/ExchangePage";
function App() {
  return (
      <div>
          <Router>
              <Header/>
              <Routes>
                  <Route exact path="/" element={<HomePage/>}/>
                  <Route path="/about" element={<AboutPage/>}/>
                  <Route path="/coins" element={<CoinCataloguePage/>}/>
                  <Route path="/souvenirs" element={<SouvenirsPage/>}></Route>
                  <Route path="/exchange" element={<ExchangePage/>}></Route>
                  <Route path="*" element={<ErrorPage/>}/>
              </Routes>
              <Footer/>
          </Router>
      </div>
  );
}

export default App;
