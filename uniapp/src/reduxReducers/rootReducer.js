
import getAllCampusesReducer from "./getCampuses";
import { combineReducers } from "redux";
import getAllStudentsReducer from "./getStudentReducer";
import updateStudentReducer from "./updateStudentReducer";

const rootReducer = combineReducers({
    getCampuses: getAllCampusesReducer,
    getStudents: getAllStudentsReducer,
    updateStudent: updateStudentReducer
})

export default rootReducer