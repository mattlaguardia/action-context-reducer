import { FC, useContext } from 'react';
import { CountContext } from '../../contexts';
import { INCREMENT_ACTION } from '../../actions';

const ComponentOne: FC = () => {
  const { state, dispatch } = useContext(CountContext);

  console.log('test token');

  return (
    <>
      <p>
        ComponentOne Count = { state.count }
        <br/>
        <button onClick={() => dispatch(INCREMENT_ACTION)}>
          count is {state.count}
        </button>
      </p>
    </>
  )
};

export default ComponentOne;
