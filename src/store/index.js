import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './RooReducer'

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger')
  middlewares.push(logger)
}

const middleware = applyMiddleware(thunk, ...middlewares)

export default createStore( RootReducer, middleware )