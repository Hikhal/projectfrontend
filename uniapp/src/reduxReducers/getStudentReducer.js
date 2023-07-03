const initialState = [];

const getAllStudentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHSTUDENTS':
      return state = action.payload//[...state, ...action.payload];
    case 'REMOVE_STUDENT':
      return state.filter(student => student.id !== action.payload);
    case 'ADD_STUDENT':
        return [...state,action.payload]
    default:
      return state;
  }
};

//[ahmed, ghulam, hamza]
//add shoaib

//[ahmed, ghulam, hamza, shoaib]
//[ahhmed, ghulam,hamza, ahmed]

export default getAllStudentsReducer;
