import { createStore } from 'redux'
import themeReducer from './themeReduce'

const store = createStore(themeReducer);

export default store;