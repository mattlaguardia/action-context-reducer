import { FC, useEffect, useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
        id: uuidv4(),
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
            imagesState.map((selector, index) =>
              <div className="image-card"
                key={selector.id}
                onClick={() => {
                  setImagesState(imagesState.filter(el => el.id !== selector.id));
                }}
              >image { index }</div>
            )
          }
        </div>
        <p>
          <button onClick={() => {
            const clone = structuredClone(imagesState);

            for (let i = 0; i < 6; i++) {
              const num = Math.floor(Math.random() * imagesState.length);

              delete clone[num];
            }

            setImagesState(clone);
          }}>Delete Random 5</button>
          <button onClick={() => {
            const clone = structuredClone(imagesState);

            for (let i = 0; i < 6; i++) {
              const num = Math.floor(Math.random() * imagesState.length);

              clone.splice(num, 0, {
                id: uuidv4()
              });
            }

            setImagesState(clone);
          }}>Add Random 5</button>
        </p>
      </div>
    </div>
  )
}

export default App
