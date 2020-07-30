import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = { counterValue: 5 };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return {
        counterValue: state.counterValue + payload,
      };

    case 'counter/Decrement':
      return {
        counterValue: state.counterValue - payload,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
