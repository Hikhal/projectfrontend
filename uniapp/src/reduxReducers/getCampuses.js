const initialState = []

 // reducer function that gets called everytime the fetchCampuses action gets dispatched.
const getAllCampusesReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'FETCHCAMPUSES':
            return state = [...state, ...action.payload]
        case 'CLEAR_ALL_STATES':
            return []; 
        case 'REMOVE_CAMPUS':
            return state.filter(campus => campus.id !== action.payload);
        default:
            return state;
    }
}

export default getAllCampusesReducer

