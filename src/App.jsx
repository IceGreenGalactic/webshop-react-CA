import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage.jsx';
import Checkout from './pages/Checkout/Checkout.jsx';
import CheckoutSuccess from './pages/Checkout/CheckoutSuccess.jsx';

import './App.css';
import Cart from './pages/Cart/Cart.jsx';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SingleProductPage/:productId" element={<SingleProductPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/CheckoutSuccess" element={<CheckoutSuccess />} />
        </Routes>
      </main>
   
      <Footer />
    </Router>
  );
}

export default App;
