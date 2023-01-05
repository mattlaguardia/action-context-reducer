import React, { FC, useState } from 'react';

const ComponentOne: FC = () => {
  const [ count, setCount ] = useState(0);

  return (
    <>
      <p>
        ComponentOne Count = { count }
        <br/>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </p>
    </>
  )
};

export default ComponentOne;
