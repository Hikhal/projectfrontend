const initialState = []
const updateStudentReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_STUDENT':
            const updatedStudent = action.paylaod // this will hold updated students info
           
             // find the pos of the student inside of the state array
            const index = state.findIndex(student => student.id === updatedStudent.id)

            // if the student exists, update their information, else add the updated student to the state.
            if(index !== -1 ){
                const newState = [...state]
                newState[index] = updatedStudent
                return newState
            }else{
                return [...state, updatedStudent]
            }
        default:
            return state
    }
}
export default updateStudentReducer