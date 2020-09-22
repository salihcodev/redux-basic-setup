// MODAL REDUCER FILE:

// import actions
import { MODAL_CLOSE, MODAL_OPEN } from '../actions/MainActions';

// INITIAL STATE:
const initState = {
  isOpen: false,
  name: '',
  text: '',
};

// single source of truth. [REDUCER]
export default function modalReducer(state = initState, action) {
  // check which type of action we need to execute:

  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        isOpen: true,
        name: action.payload.name,
        text: action.payload.text,
      };

    case MODAL_CLOSE:
      return {
        ...state,
        isOpen: false,
        name: '',
        text: '',
      };

    default:
      return state;
  }
}
