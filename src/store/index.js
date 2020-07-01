import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import dataReducer from './reducers';

const middlewares = applyMiddleware(thunk);
const reducers = combineReducers({ case: dataReducer });

export default createStore(reducers, middlewares);
