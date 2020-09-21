// COUNT REDUCER FILE:

// import actions
import {
  RESET,
  ADD_ONE,
  ADD_5,
  REMOVE_ONE,
  REMOVE_5,
} from '../actions/MainActions';

// INITIAL STATE:
const initState = {
  counter: 0,
};

// single source of truth. [REDUCER]
export default function countReducer(state = initState, action) {
  // check which type of action we need to execute:
  switch (action.type) {
    case RESET:
      return { ...state, counter: 0 };

    case ADD_ONE:
      return { ...state, counter: state.counter + 1 };

    case ADD_5:
      return { ...state, counter: state.counter + 5 };

    case REMOVE_ONE:
      return { ...state, counter: state.counter - 1 };

    case REMOVE_5:
      return { ...state, counter: state.counter - 5 };

    default:
      return state;
  }
}
