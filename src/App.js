import React from 'react';
import './App.css';

import { Provider } from 'react-redux';

// reducers
import countReducer from './store/reducers/CountReducer';
import modalReducer from './store/reducers/ModalReducer';
import productsReducer from './store/reducers/ProductsReducer';

// UTILITIES:
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// COMPONENTS:
import Counter from './components/Counter';

// create store.
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productsState: productsReducer,
  }),
  composeWithDevTools()
);

function App() {
  return (
    <Provider store={store}>
      <Counter hi="try" />
    </Provider>
  );
}

export default App;
