import { FC } from 'react';
import './App.css'

import { CountProvider } from './providers';

import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

const App: FC = () => {
  return (
    <div className="App">
      <div className="card">
        <CountProvider>
          <ComponentOne />
          <ComponentTwo />
        </CountProvider>
      </div>
    </div>
  )
}

export default App
