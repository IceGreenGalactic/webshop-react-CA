import { useState } from 'react'
import { Button } from './App.styles';
import Header from './components/Header/Header.jsx';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
      <Header />
        <Button>click me</Button>
      </div>
    </>
  )
}

export default App
