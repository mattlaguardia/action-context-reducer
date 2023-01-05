import { FC, useReducer, ReactNode } from "react";

import { countReducer } from "../reducers";
import { CountContext } from "../contexts";

export const CountProvider: FC<{children: ReactNode}> = ({ children }) => {
  const [ state, dispatch ] = useReducer(countReducer, { count: 0 });

  const store = { state, dispatch };

  return (
    <CountContext.Provider value={ store }>{ children }</CountContext.Provider>
  )
}
