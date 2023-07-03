import axios from "axios";
const UPDATE_STUDENT = 'UPDATE_STUDENT'

export const updateStudent = (payload) => {
    return {
        type: UPDATE_STUDENT,
        payload: payload
    }

}

export const updateStudentThunk = (url, student) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(url, student)
            console.log(res)
            alert(`Student info update submitted.`);
            dispatch(updateStudent(res.data))
        } catch (error) {
            console.log(error)
        }
    }
}