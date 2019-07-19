import {combineReducers} from 'redux';
import {addIdeaReducer} from './addIdeaReducer'

const allReducers = combineReducers({
  addIdeaReducer: addIdeaReducer
})

export default allReducers;