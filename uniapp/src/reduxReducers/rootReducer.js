import { createPath } from "react-router-dom";
import getAllCampusesReducer from "./getCampuses";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    getCampuses: getAllCampusesReducer
})

export default rootReducer