const initialState = []
const updateCampusReducer = (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_CAMPUS':
            const updatedCampus = action.payload // this will hold updated campus info
            const newState = state.filter(campus => campus.id !== updatedCampus.id)
            return [...newState, updatedCampus]
        default:
            return state
    }
}
export default updateCampusReducer;