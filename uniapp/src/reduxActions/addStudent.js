import axios from 'axios'
import { fetchAllStudents } from './fetchStudents'
const ADD_STUDENT = 'ADD_STUDENT'


// action creator
export const add_student = (payload) =>{
    return {
        type: ADD_STUDENT,
        payload: payload
    }

}

export const addStudentThunk = (url, student) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(url, student);
            const newStudent = response.data;
            alert(`Entry for "${newStudent.firstName} ${newStudent.lastName}" submitted`);
            dispatch(add_student(newStudent))
            dispatch(fetchAllStudents()); 
        } catch (error) {
            console.log(error)
            
        }

    }

}