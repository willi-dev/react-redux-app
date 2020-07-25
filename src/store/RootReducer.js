import { combineReducers } from 'redux'
import marsRoverAllReducer from './MarsRover/All/Reducer'
import cartReducer from './AddToCart/Reducer'

const rootReducer = combineReducers({
  all: marsRoverAllReducer,
  cart: cartReducer
})

export default rootReducer