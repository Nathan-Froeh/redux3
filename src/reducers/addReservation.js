
export const addReservations = (state=[], action) => {
  switch(action.type) {
    case 'ADD_RES':
      return [...state, action.payload];
    default:
      return state;
  }
}