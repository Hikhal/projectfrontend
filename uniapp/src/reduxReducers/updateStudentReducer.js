const initialState = []
const updateStudentReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_STUDENT':
            const updatedStudent = action.payload // this will hold updated students info
            const newState = state.filter(student => student.id !== updatedStudent.id)
            return [...newState, updatedStudent]
        default:
            return state
    }
}
export default updateStudentReducer