import {createStore, compose} from 'redux';
import reducer from '../reducer/index';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        trace: true,
        serialize: true,
    }) : compose;

const enhancer = composeEnhancers();
const store = createStore(reducer, {}, enhancer);

export default store;