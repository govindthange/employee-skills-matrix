import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';

import themeReducer from './theme/themeReduce'

import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;