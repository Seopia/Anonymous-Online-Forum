import { combineReducers } from "redux";
import { getPostReducer} from './postReducer';
import { getAroundPostReducer } from "./aroundPostReducer";


const rootReducer = combineReducers({
    post: getPostReducer,
    aroundPost: getAroundPostReducer,
});

export default rootReducer;