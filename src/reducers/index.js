import {combineReducers} from 'redux';
import {addIdeaReducer} from './addIdeaReducer'

const allReducers = combineReducers({
  ideas: addIdeaReducer
})

export default allReducers;