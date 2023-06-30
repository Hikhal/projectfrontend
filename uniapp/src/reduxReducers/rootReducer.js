import { createPath } from "react-router-dom";
import getAllCampusesReducer from "./getCampuses";
import { combineReducers } from "redux";
import getAllStudentsReducer from "./getStudentReducer";

const rootReducer = combineReducers({
    getCampuses: getAllCampusesReducer,
    getStudents: getAllStudentsReducer
})

export default rootReducer