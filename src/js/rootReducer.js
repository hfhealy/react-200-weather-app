import { combineReducers } from 'redux';
import axios from 'axios';
import SearchReducer from './components/search/searchReducer';


const rootReducer = combineReducers ({
    search: SearchReducer
});

export default rootReducer;
