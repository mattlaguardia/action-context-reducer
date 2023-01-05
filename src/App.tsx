import { useState } from 'react'
import './App.css'

import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <ComponentOne />
        <ComponentTwo />
      </div>
    </div>
  )
}

export default App
