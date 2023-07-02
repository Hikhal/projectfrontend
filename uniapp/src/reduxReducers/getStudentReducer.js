const initialState = [];

const getAllStudentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHSTUDENTS':
      return [...state, ...action.payload];
    case 'CLEAR_ALL_STATES':
      return [];
    case 'REMOVE_STUDENT':
      return state.filter(student => student.id !== action.payload);
    default:
      return state;
  }
};

export default getAllStudentsReducer;
