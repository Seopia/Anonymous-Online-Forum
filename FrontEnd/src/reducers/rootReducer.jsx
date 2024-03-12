import { combineReducers } from "redux";
import {getPostReducer} from './postReducer';


const rootReducer = combineReducers({
    post: getPostReducer,
});

export default rootReducer;