import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import { useState } from 'react';
import { Button } from './App.styles';
import GlobalStyle from './styles/GlobalStyle.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Theme from './styles/theme.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import SingleProductPage from './pages/SingleProductPage/SingleProductPage.jsx';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SingleProductPage/:productId" element={<SingleProductPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
