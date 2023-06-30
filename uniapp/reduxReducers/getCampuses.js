const initialState = []

 // reducer function that gets called everytime the fetchCampuses action gets dispatched.
const getAllCampusesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'FECTHCAMPUSES':
            return state = [...state, action.payload]
        default:
            return state
    }
}

export default getAllCampusesReducer

