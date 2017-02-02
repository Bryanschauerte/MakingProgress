
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
// import createReducer from '../lib/createReducer';

// const tempReducer = createReducer({},{});
import rootReducer from '../rootReducer';

const loggerMiddleware = createLogger({predicate: (getState,action) => __DEV__});

export default function configureStore(){
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleWare,
      loggerMiddleware
    )
  )
  const store =  createStore(rootReducer, enhancer);
  return store;
}
