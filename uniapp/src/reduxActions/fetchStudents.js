import axios from 'axios'
import {removeStudent} from './removeStu'
// creating action
 const actiontype = 'FETCHSTUDENTS'

export const fetchAllStudents = (payload) => {
    // console logging for testing
    console.log("fetching all STUDENTS action")
    return {
        type: actiontype,
        payload: payload
    }
}

/**
 * The function returns an asynchronous function that takes a dispatch parameter.
 *  This function is the actual thunk function that will be executed when fetchAllCampusesThunk is invoked.
 */

export const fetchAllStudentsThunk = () => {
    return async (dispatch) => {
        try {
            const datalist = await axios.get(`${process.env.REACT_APP_BACKEND_URL_1}/api/students`)
            console.log(datalist.data)
            dispatch(fetchAllStudents(datalist.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export const removeStudentThunk=(id)=>{
    return async (dispatch)=>{
        try{
            await axios.delete(`${process.env.REACT_APP_BACKEND_URL_1}/api/students/delete/${id}`);
            dispatch(removeStudent(id))
        }catch (error){
            console.log(error);
        }
    }
}

