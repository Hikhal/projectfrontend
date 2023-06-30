const initialState = []

 // reducer function that gets called everytime the fetchCampuses action gets dispatched.
const getAllStudentsReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'FETCHSTUDENTS':
            return state = [...state, action.payload]
        case 'CLEAR_ALL_STATES':
            state = []
        default:
            return state
    }
}

export default getAllStudentsReducer;

