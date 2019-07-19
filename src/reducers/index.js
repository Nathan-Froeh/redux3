import {combineReducers} from 'redux';
import {addIdeaReducer} from './addIdeaReducer';
import {addReservations} from './addReservation'

const allReducers = combineReducers({
  ideas: addIdeaReducer,
  reservations: addReservations
})

export default allReducers;