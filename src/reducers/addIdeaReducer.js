
export const addIdeaReducer = (state=['1'], action) => {
  switch(action.type) {
    case 'ADD_IDEA':
      return [...state, action.payload]
    default:
      return state;
  }
}