import { FC, useEffect, useState, useRef } from 'react';
import autoAnimate from '@formkit/auto-animate';
import './App.css'

import { CountProvider } from './providers';

import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

const App: FC = () => {
  const images = new Array(32)
    .fill('')
    .map((el, index) => {
      return {
        id: index,
      }
    });

  const parent = useRef(null)

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  const [ imagesState, setImagesState ] = useState(images);

  return (
    <div className="App">
      <div className="card">
        <h3>Shared State Example Implementation</h3>
        <CountProvider>
          <ComponentOne />
          <ComponentTwo />
        </CountProvider>
      </div>

      <div className="card">
        <h3>Card Animation</h3>
        <div className="container" ref={parent}>
          {
            imagesState.map((selector) =>
              <div className="image-card"
                key={selector.id}
                onClick={() => {
                  setImagesState(imagesState.filter(el => el.id !== selector.id));
                }}
              >image { selector.id }</div>
            )
          }
        </div>
        <p>
          <button onClick={() => {
            const cache: { [key: string]: number } = {};

            for (let i = 0; i < 6; i++) {
              const num = Math.floor(Math.random() * imagesState.length);

              cache[num] = num;
            }

            setImagesState(imagesState.filter(el => el.id !== cache[el.id]));
          }}>Delete Random 5</button>
        </p>
      </div>
    </div>
  )
}

export default App
