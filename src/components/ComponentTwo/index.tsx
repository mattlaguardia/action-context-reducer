import { FC, useContext } from 'react';
import { CountContext } from '../../contexts';
import { DECREMENT_ACTION } from '../../actions';

const ComponentTwo: FC = () => {
  const { state, dispatch } = useContext(CountContext);

  return (
    <>
      <p>
        ComponentTwo Count = { state.count }
        <br/>
        <button onClick={() => dispatch(DECREMENT_ACTION)}>
          count is {state.count}
        </button>
      </p>
    </>
  )
};

export default ComponentTwo;
