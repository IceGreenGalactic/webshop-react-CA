import { useState } from 'react'
import { Button } from './App.styles';
import GlobalStyle from './styles/GlobalStyle.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Theme from './styles/theme.jsx';

import './App.css'

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <main>
 
      </main>
      <Footer />
    </Theme>
  );
}


export default App
