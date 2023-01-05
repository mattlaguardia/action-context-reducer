import { INCREMENT_ACTION, DECREMENT_ACTION } from "../actions"

export const countReducer = (state: { count: number }, action: 'increment' | 'decrement') => {
  switch (action) {
    case INCREMENT_ACTION: {
      return {
        count: state.count + 1
      }
    }
    case DECREMENT_ACTION: {
      return {
        count: state.count - 1
      }
    }
    default: {
      throw new Error(`Unknown action ${action}`);
    }
  }
}
