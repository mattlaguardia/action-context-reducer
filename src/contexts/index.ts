import { createContext } from "react";

const countContextDefault: {
  state: {
    count: number
  },
  dispatch: CallableFunction
} = {
  state: { count: 0 },
  dispatch: () => { return }
};

export const CountContext = createContext(countContextDefault);
