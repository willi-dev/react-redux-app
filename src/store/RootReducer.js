import { combineReducers } from 'redux'
import homeReducer from '../pages/Home/Store/Reducer'

const rootReducer = combineReducers({
  home: homeReducer
})

export default rootReducer