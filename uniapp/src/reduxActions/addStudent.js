import axios from 'axios'
import { fetchAllStudents } from './fetchStudents'
const ADD_STUDENT = 'ADD_STUDENT'


// action creator
export const add_student = (student) =>{
    return {
        type: "ADD_STUDENT",
        "payload": student
    }

}

export const addStudentThunk = (url, student) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(url, student);
            const newStudent = response.data;
            alert(`Entry for "${newStudent.firstName} ${newStudent.lastName}" submitted`);
            student={...student,id:newStudent.id}
            dispatch(add_student(student));
        } catch (error) {
            console.log(error)
            
        }

    }

}