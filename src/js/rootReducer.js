import { combineReducers } from 'redux';
import SearchReducer from './components/search/searchReducer';


const rootReducer = combineReducers ({
    search: SearchReducer
});

export default rootReducer;
