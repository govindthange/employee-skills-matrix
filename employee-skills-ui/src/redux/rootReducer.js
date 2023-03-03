import  {combineReducers} from 'redux';
import themeReducer from './theme/themeReduce';
import progressbarReducer from './progress-bar/progressbarReducer';
import employeeReducer from './employee/employeeDataReducer';

const rootReducer = combineReducers({
    theme: themeReducer,
    progressbar: progressbarReducer,
    employee: employeeReducer
});

export default rootReducer;