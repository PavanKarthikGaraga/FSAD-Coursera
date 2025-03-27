import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header/Header';
import LandingPage from './pages/LandingPage/LandingPage';
import ProductListing from './pages/ProductListing/ProductListing';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import './styles/global.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
