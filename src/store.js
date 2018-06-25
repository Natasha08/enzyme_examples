import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(thunk))
);

export default store;
