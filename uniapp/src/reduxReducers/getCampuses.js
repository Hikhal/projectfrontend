const initialState = []

 // reducer function that gets called everytime the fetchCampuses action gets dispatched.
const getAllCampusesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'FETCHCAMPUSES':
            return action.payload
        case 'REMOVE_CAMPUS':
            return state.filter(campus => campus.id !== action.payload);
        default:
            return state;
    }
}

export default getAllCampusesReducer

